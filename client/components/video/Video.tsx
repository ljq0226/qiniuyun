'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import useVideoTime from '@/hooks/useVideoTime'
import { formatTime, throttle } from '@/libs'

interface Props {
  windowSize: {
    width: number
    height: number
  }
  cardArrange: number
  cardWidth: number
  cardTop: number
  cardLeft: number
  videoUrl: string
  imgUrl: string
  isVertical: boolean
}

function Video({ windowSize, cardArrange, isVertical, cardWidth, cardLeft, cardTop, videoUrl, imgUrl }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const processRef = useRef<HTMLInputElement | null>(null)
  const [isPlaying, setIsplaying] = useState(false)
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
      console.log(' play')
      setIsplaying(true)
      video.play()
      return
    }
    else if (isPlay === 's') {
      console.log(' stop')

      setIsplaying(false)
      video.pause()
      return
    }
    isPlay ? video.pause() : video.play()
  }
  const height = isVertical ? cardWidth * 16 / 9 : cardWidth * 9 / 16

  return (
    <div
      className="video-card absolute mb-6 z-[1] cursor-pointer bg-[--c-bg-b1] text-[20px] rounded-xl overflow-hidden border-[0.5px] border-solid border-[hsla(0,0%,100%,.1)]"
      style={{ width: cardWidth, top: cardTop, left: cardLeft }}
    >

      {/* <a href="http://localhost:3000/discover" className="relative w-full"> */}
      <div className="relative w-full">
        <div
          className="absolute w-full text-white"
          style={{
            zIndex: isPlaying ? -10 : 10,
            height,
          }}
        >
          <img
            onMouseEnter={throttle(handleMouseEnter, 300, true)}
            onMouseLeave={throttle(handleMouseLeave, 1000)}
            className="w-full h-full "
            src={imgUrl}
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full flex z-[10] h-10 ">
            <div className="flex flex-center ml-6">
              <Icon icon="emojione-v1:sparkling-heart" height={20}></Icon>
              <div className="ml-2">3.0万</div>
            </div>
            <div className="flex-1"></div>
            <div className="bg-[rgba(0,0,0,.7) w-16 h-10 flex flex-center rounded min-w-[43px] ]">{formatTime(durationTime)}</div>
          </div>
        </div>
        <div className="relative" style={{ height }}>
          <div
            onMouseEnter={throttle(handleMouseEnter, 300, true)}
            onMouseLeave={throttle(handleMouseLeave, 300, true)}
          >
            <video
              ref={videoRef}
              loop
              style={{}}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div
              className="absolute bottom-0 h-10 z-[1] w-full"
              onMouseEnter={(e) => {
                e.stopPropagation()
                setIsHover(true)
              }}
              onMouseLeave={(e) => {
                e.stopPropagation()
                setIsHover(false)
              }}
            >
              <div className="flex px-3 h-full items-center justify-between text-white">
                <div
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    togglePlaying(isPlaying ? 's' : 'p')
                  }}
                >
                  {VideoTime}
                </div>

                <div
                  style={{ height: isHover ? 6 : 4 }}
                  className="absolute  bottom-0 left-0 w-full bg-[hsla(0,0%,100%,.6)]"
                >
                  {isHover
                    ? (
                      <input
                        ref={processRef}
                        className="w-full bg-white translate-y-3/4 absolute rounded h-full left-0 bottom-0 z-[20] "
                        onMouseDown={throttle((e) => {
                          e.preventDefault()
                          const video = videoRef.current
                          if (video)
                            togglePlaying('s')
                        }, 300)}
                        onMouseUp={(e) => {
                          e.preventDefault()
                          const value = +e.currentTarget.value
                          const video = videoRef.current
                          if (video) {
                            video.currentTime = video.duration * value / 100
                            setProgress(value)
                            togglePlaying('p')
                          }
                        }}
                        onChange={(e) => {
                          e.preventDefault()
                          const progress = processRef.current
                          if (progress)
                            setProgress(Number.parseFloat(progress.value))
                        }}
                        value={`${progress}`}
                        type="range"
                        id="progressBar"
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
              </div>

            </div>
          </div>
        </div>
        <div
          onMouseLeave={throttle(handleMouseLeave, 300, true)}
          className="p-3 flex bg-[--c-bg-b1] select-none  flex-col hover:bg-[--card-bg-0-hover] h-32 "
        >

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
      </div>

    </div>
  )
}
export default Video
