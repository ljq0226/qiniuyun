'use client'
import useVideoTime from '@/hooks/useVideoTime';
import { throttle } from '@/libs';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import '@/styles/video.css'
interface Props {
  isVertical: boolean
  url: string
}

function FullVideo({ isVertical, url }: Props) {
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
      const mouseY = event.clientY;
      const screenHeight = window.innerHeight;
      const distanceFromBottom = screenHeight - mouseY;

      if (distanceFromBottom >= 50 && distanceFromBottom <= 60) {
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
    { height: `calc(100vh - 60px)`, top: 0 } :
    { height: `56.25vw`, top: `calc((100vh - 56.25vw) / 2)` }
  const elementStyle = {
    top: 'calc((100vh - 80px) / 2)',
    transform: 'translateX(-40%)'
  };
  return (
      <div className="w-full h-full relative"
      >
        <div className="fixed w-full left-0 bottom-0 z-20 flex flex-col bg-transparent text-white text-[22px]"
          onMouseEnter={throttle(() => {
            console.log(' hover',)
            setIsHover(true)
          }, 300)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className='text-[26px] pl-5'>@LBJ * 9月 4 日</div>
          <div className='pl-5 py-3'>雨纷纷 旧故里草木深</div>
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

          <div className='flex items-center pl-5 w-full py-3'>
            <div onClick={() => {
              console.log('click')
              handleClickVideo()
            }}>
              {
                isPlaying ?
                  <Icon height={24} icon={'ph:pause-fill'} />
                  :
                  <Icon height={24} icon={'fluent:play-12-filled'} />
              }
            </div>
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
        <div className="relative w-full " >
          <video
            ref={videoRef}
            onClick={handleClickVideo}
            loop
            className="absolute left-0 w-full z-[10]" style={videoStyle} >
            <source src={`/video/v${url}.mp4`} />
          </video>
          <div className='absolute w-24 h-24 flex flex-center left-[50%] z-10'
            style={elementStyle}
            onClick={() => {
              handleClickVideo()
            }}
          >
            {!isPlaying && <Icon height={100} color='#f3eae5' icon={'fluent:play-12-filled'} />}
          </div>
        </div>

        <div className={`absolute left-0 scale-125 top-0 w-full z-0 h-full
          bg-[url(http://s34q2o4v2.hd-bkt.clouddn.com/img${url}.jpeg)]
        bg-center bg-no-repeat bg-cover `}
          style={{ filter: 'blur(20px)' }}>
        </div>
      </div>
  )
}
export default FullVideo
