'use client'
import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Icon } from '@iconify/react'
import useWindowSize from '@/hooks/useWindowSize'
import useVideoTime from '@/hooks/useVideoTime'
import { throttle } from '../libs/util'
function Page() {
  // left 宽度 160
  // >1500 5个
  // 1150 3个
  // 875 2个
  // 600 1个

  // 16px
  // 22 px

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { windowSize, setWindowSize } = useWindowSize()
  const [isPlaying, setIsPalying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrenTime] = useState(0)
  const [durationTime, setDuration] = useState(0)
  const [cardWidth, setCardWidth] = useState((windowSize.width - 160 - 22 * 2 - 16 * 4) / 4)
  const [cardArrange, setCardArrange] = useState(0)
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

    video.addEventListener('timeupdate', updateProgress)

    return () => {
      video.removeEventListener('timeupdate', updateProgress)
    }
  }, [])

  const handleMouseEnter = () => {
    togglePlaying('p')
  }
  const handleMouseLeave = () => {
    togglePlaying('s')
  }
  const togglePlaying = (isPlay: boolean | 'p' | 's') => {
    const video = videoRef.current as HTMLVideoElement
    if (isPlay === 'p') {
      console.log(' play',)
      setIsPalying(true)
      video.play()
      return
    }
    else if (isPlay === 's') {
      console.log(' stop',)

      setIsPalying(false)
      video.pause()
      return
    }
    isPlay ? video.pause() : video.play()
  }


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      switch (true) {
        case width > 1500:
          setCardWidth((width - 160 - 22 * 2 - 16 * 4) / 5)
          break
        case width > 1150:
          setCardWidth((width - 160 - 22 * 2 - 16 * 3) / 4)
          break
        case width > 875:
          setCardWidth((width - 160 - 22 * 2 - 16 * 2) / 3)
          break
        case width > 600:
          setCardWidth((width - 160 - 22 * 2 - 16 * 1) / 2)
          break
        default:
          setCardWidth(400)
      }
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative">
      <div
        className="absolute cursor-pointer bg-[--c-bg-b1] text-[20px] rounded-xl overflow-hidden border-[0.5px] border-solid border-[hsla(0,0%,100%,.1)]"
        style={{ width: cardWidth }}
      >
        <a href="http://localhost:3000/discover" className="relative">
          <div
            className="absolute"
            style={{ zIndex: isPlaying ? -10 : 10 }}
          >
            <img

              onMouseEnter={throttle(handleMouseEnter, 300, true)}
              onMouseLeave={throttle(handleMouseLeave, 1000)}
              src="/img/img2.jpeg"
              alt=""
            />
            <div className="absolute bottom-0 h-10 z-[1] w-full">
              <div className='flex items-center'>
                <Icon icon={''}></Icon>
                <div>1.2万</div>
              </div>
              <div>
                {durationTime}
              </div>

            </div>
          </div>
          <div className="relative">
            <div
              onMouseEnter={throttle(handleMouseEnter, 300, true)}
              onMouseLeave={throttle(handleMouseLeave, 300, true)}
            >
              <video
                ref={videoRef}
                loop
                style={{}}
              >
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute bottom-0 h-10 z-[1] w-full"
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
              >
                <div className="flex px-3 h-full items-center justify-between text-white">
                  <div className="flex items-center"
                    onClick={(e) => {
                      e.preventDefault()
                      console.log(' click',)
                      togglePlaying(isPlaying ? 's' : 'p')
                    }}
                  >
                    {VideoTime}
                  </div>
                  <div>
                  </div>
                </div>
                <div className="absolute bg-white height-full">

                </div>

              </div>
            </div>


          </div>
          <div className="p-3 flex  flex-col hover:bg-[--card-bg-0-hover] ">
            <div className="text-[--c-text-t1] overflow-hidden text-ellipsis break-all">
              很好奇，当代网友能把遗憾写到什么程度
            </div>

            <div className="mt-2 text-[--c-text-t2] flex justify-self-start w-full">
              <div>
                @ KK.Dai
              </div>
              <div>
                ·
              </div>
              <div>一周前</div>
              <div className="flex-1"></div>
              <div className="flex flex-center">
                <Icon icon="icon-park:more-two" height={18} />
              </div>
            </div>
          </div>
        </a>

      </div>

    </div>
  )
}
export default Page
