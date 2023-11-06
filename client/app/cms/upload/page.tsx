'use client'
import { useUploadVideo } from '@/hooks/useUploadVideo'
import React, { useState } from 'react'

function FileUploadComponent() {

  const [file, setFile] = useState()


  const handleFileChange = async (event: any) => {
    console.log('1 ',)
    event.preventDefault()
    const input: any = event.target
    const preName = input.files[0].name.split('.')[0]
    console.log('file', file)
    console.log(input.files[0])
    setFile(input.files[0])
    // await useUploadVideo(file, preName)
  }
  return (
    <div className='mt-[--h-header] w-full h-full overflow-y-scroll p-6 bg-transparent'>
      {file ?
        <div className="flex">有文件</div>
        :
        <div className="flex flex-col">
          <div className='cursor-pointer relative w-full h-[400px] bg-[rgb(var(--neutral-50))]'>
            <div className='absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2' >
              点击上传或直接将视频文件拖入此区域
            </div>
            <input className='rounded-2xl w-full h-full cursor-pointer' type="file" onChange={(e) => handleFileChange(e)} />
          </div>

          <div className="my-6 flex space-x-4 w-full">
            <div className="rounded-xl p-4 flex flex-col bg-[rgb(var(--neutral-50))] w-1/3">
              <div className="text-black font-bold text-[18px]">视频格式</div>
              <div>支持常用格式、推荐使用 mp4</div>
            </div>
            <div className="p-4 flex flex-col bg-[rgb(var(--neutral-50))] w-1/3">
              <div className="text-black font-bold text-[18px]">视频大小</div>
              <div>视频文件大小不超过16G,时长在60分钟以内</div>

            </div>
            <div className="p-4 flex flex-col bg-[rgb(var(--neutral-50))] w-1/3">
              <div className="text-black font-bold text-[18px]">视频分辨率</div>
              <div>分辨率为720 p(1280x720)及以上</div>

            </div>

          </div>

        </div>
      }

    </div>
  )
}
export default FileUploadComponent
