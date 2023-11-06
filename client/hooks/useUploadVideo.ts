import * as qiniu from 'qiniu-js'

// 将base64转换为文件

export async function useUploadVideo(file: any, preName: string) {
  const uploadToken = process.env.NEXT_PUBLIC_TOKEN as string
  const putExtra = {
    mimeType: file.type,
  }
  const config = {
    useCdnDomain: true,
    region: qiniu.region.z0, // 存储区域，根据你的实际情况进行调整
  }

  const video = document.createElement('video')
  video.preload = 'metadata'

  return new Promise((resolve, reject) => {
    video.onloadedmetadata = () => {
      if (video.duration > 0) {
        video.currentTime = 0.3
        video.onseeked = async () => {
          const canvas = document.createElement('canvas')
          const context: any = canvas.getContext('2d')
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          context.drawImage(video, 0, 0, canvas.width, canvas.height)
          let thumbnailDataURL: any = canvas.toDataURL('image/jpeg')

          const response = await fetch(thumbnailDataURL)
          const blob = await response.blob()

          // 将压缩后的缩略图转换为 File 对象
          const thumbnailFile = new File([blob], 'thumbnail.jpeg', { type: 'image/jpeg' })

          const thumbnailObservable = qiniu.upload(
            thumbnailFile,
            `ball/${preName}-1.jpeg`,
            uploadToken,
            putExtra,
            config,
          )
          const videoObservable = qiniu.upload(
            file,
            `ball/${preName}-1.mp4`,
            uploadToken,
            putExtra,
            config,
          )
          return Promise.all([new Promise((resolve, reject) => {
            thumbnailObservable.subscribe({
              next(res) {
                // 上传进度
                console.log('Upload progress:', `${res.total.percent.toFixed(2)}%`)
              },
              error(err) {
                // 上传错误
                console.error('Upload error:', err)
                reject(err)
              },
              complete(res) {
                // 上传完成
                console.log('Upload complete:', res)
                resolve(res)
              },
            })
          }), new Promise((resolve, reject) => {
            videoObservable.subscribe({
              next(res) {
                // 上传进度
                console.log('Upload progress:', `${res.total.percent.toFixed(2)}%`)
              },
              error(err) {
                // 上传错误
                console.error('Upload error:', err)
                reject(err)
              },
              complete(res) {
                // 上传完成
                console.log('Upload complete:', res)
                resolve(res)
              },
            })
          })]).then((res) => {
            resolve(res)
            console.log('over ', res)
          })
        }
      }
    }

    video.src = URL.createObjectURL(file)
    video.onerror = () => {
      reject(new Error('视频加载失败'))
    }
  })
}
