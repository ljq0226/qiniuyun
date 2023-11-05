'use client'
import useVideoTime from '@/hooks/useVideoTime';
import { throttle } from '@/libs';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import '@/styles/video.css'
interface Props {
  isVertical: boolean
}

function FullVideo({ isVertical }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const processRef = useRef<HTMLInputElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrenTime] = useState(0)
  const [durationTime, setDuration] = useState(0)
  const [isHover, setIsHover] = useState(false)
  const VideoTime = useVideoTime({ currentTime, duration: durationTime })
  useEffect(() => {
    const video = videoRef.current as HTMLVideoElement
    const updateProgress = () => {
      const currentTime = video.currentTime
      const duration = video.duration
      const calculatedProgress = (currentTime / duration) * 100
      setCurrenTime(currentTime)
      setDuration(duration)
      setProgress(calculatedProgress)
    }
    const handleMouseMove = (event: MouseEvent) => {
      const mouseY = event.clientY; // 鼠标在视口中的垂直位置
      const screenHeight = window.innerHeight; // 视口的高度
      const distanceFromBottom = screenHeight - mouseY; // 鼠标距离屏幕底部的距离

      // 在屏幕最下方80到90像素处执行一些操作
      if (distanceFromBottom >= 50 && distanceFromBottom <= 60) {
        // 执行你的操作
        if (!isHover) setIsHover(true)
      }
    };

    video.addEventListener('timeupdate', updateProgress)
    window.addEventListener('mousemove', throttle(handleMouseMove, 100))
    return () => {
      video.removeEventListener('timeupdate', updateProgress)
      window.removeEventListener('mousemove', throttle(handleMouseMove, 100))
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current as HTMLVideoElement

    setTimeout(() => {
      video.play()
      setIsPlaying(true)
    }, 300)
  }, [])

  const play = () => {
    const video = videoRef.current as HTMLVideoElement
    setIsPlaying(true)
    video.play()
  }
  const pause = () => {
    const video = videoRef.current as HTMLVideoElement
    setIsPlaying(false)
    video.pause()
  }
  const handleClickVideo = () => {
    isPlaying ? pause() : play()
  }

  const videoStyle = isVertical ?
    { height: `calc(100vh - 100px)`, top: 0 } :
    { height: `56.25vw`, top: `calc((100vh - 56.25vw) / 2)` }

  return (
    <div className="absolute cursor-pointer w-screen h-screen overflow-hidden top-0 left-0"
    >
      <div className="w-full h-full relative"
      >
        <div className="absolute w-full left-0 bottom-[0] z-10 flex flex-col bg-transparent text-white text-[20px]"
          onMouseEnter={throttle(() => {
            console.log(' hover',)
            setIsHover(true)
          }, 300)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className='text-[22px] pl-3'>@LBJ * 9月 4 日</div>
          <div className='pl-3 py-3'>雨纷纷 旧故里草木深</div>
          <div
            style={{ height: isHover ? 4 : 4 }}
            className="relative left-0 z-[10] w-full bg-[hsla(0,0%,100%,.6)]"
          >
            {isHover
              ? (
                <input
                  ref={processRef}
                  style={{ height: isHover ? 9 : 4, background: `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)` }}
                  className="absolute w-full bg-white translate-y-3/4  rounded left-0 bottom-0 z-[20] "
                  onMouseUp={(e) => {
                    const value = +e.currentTarget.value
                    const video = videoRef.current
                    if (video) {
                      video.currentTime = video.duration * value / 100
                      setProgress(value)
                    }
                  }}
                  onInput={(e) => {
                    e.preventDefault()
                    const progress = processRef.current
                    const video = videoRef.current
                    if (progress && video) {
                      const value = Number.parseFloat(e.currentTarget.value)
                      video.currentTime = durationTime * (+value) / 100
                      progress.style.background = `linear-gradient(to right, #f50 ${value}%, #ccc ${value}%)`
                      progress.style.setProperty("--thumb-rotate", `${(+value / 100) * 2160}deg`)
                      setProgress(value)
                    }
                  }}
                  value={`${progress}`}
                  type="range"
                  id="range3"
                  min="0"
                  max="100"
                  step="0.01"
                />
              )
              : (
                <div className="flex w-full absolute rounded h-full left-0 bottom-0 z-[20]  bg-white" style={{ width: `${progress}%` }}>
                </div>
              )}
          </div>

          <div className='flex pl-3 w-full py-3'>
            <Icon icon={''} />
            <div>
              {VideoTime}
            </div>
            <div className="flex-1"></div>
            <div>
              连播
            </div>
            <div>
              清屏
            </div>
          </div>
        </div>
        <video
          ref={videoRef}
          onClick={handleClickVideo}
          loop
          className="absolute left-0 w-full z-[10]" style={videoStyle} >
          <source src="/video/v2.mp4" />
        </video>
        <div className="absolute left-0 scale-125 top-0 w-full z-0 h-full bg-[url(http://s34q2o4v2.hd-bkt.clouddn.com/img2.jpeg)] bg-center bg-no-repeat bg-cover "
          style={{ filter: 'blur(20px)' }}>
        </div>
      </div>
    </div>
  )
}
export default FullVideo
