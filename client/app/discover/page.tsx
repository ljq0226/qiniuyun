'use client'
import React, { useEffect, useState } from 'react'
import Video from '@/components/video/Video'
import useWindowSize from '@/hooks/useWindowSize'
import Header from '@/components/header'

export default function Page() {
  const { windowSize, setWindowSize } = useWindowSize()
  const width = windowSize.width
  let initalArrange = 3
  switch (true) {
    case width > 1600:
      initalArrange = 4
      break
    case width > 1240:
      initalArrange = 3
      break
    case width > 840:
      initalArrange = 2
      break
    default:
      initalArrange = 1
  }
  const [cardArrange, setCardArrange] = useState(initalArrange)
  const [cardWidth, setCardWidth] = useState((windowSize.width - 160 - 22 * 2 - 16 * cardArrange + 16) / cardArrange)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      switch (true) {
        case width > 1600:
          setCardWidth((width - 160 - 22 * 2 - 16 * 3) / 4)
          setCardArrange(4)
          break
        case width > 1240:
          setCardWidth((width - 160 - 22 * 2 - 16 * 2) / 3)
          setCardArrange(3)
          break
        case width > 840:
          setCardWidth((width - 160 - 22 * 2 - 16 * 1) / 2)
          setCardArrange(2)
          break
        default:
          setCardWidth(500)
          setCardArrange(1)
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

  const VideoProps = {
    windowSize,
    cardArrange,
    cardWidth,
  }

  const getHeight = (isVertical: boolean) => {

  }

  const arr = [0, 3, 4, 5]
  return (
    <>

      <Header isFull={true} />
      <div className="main-container z-0 h-full overflow-y-scroll mt-[var(--h-header)] text-[var(--c-text-t1)] ">

        <div className="relative px-6  bg-transparent h-full w-full">
          {arr.map((item, index) => {
            const top = index == 0 ? 0 : 1
            const left = index % cardArrange == 0 ? 24 : (index % 4) * cardWidth + (index % 4) * 16
            return (
              <>
                <Video key={index} isVertical={!item} {...VideoProps} videoUrl={`/video/v${index + 2}.mp4`} imgUrl={`/img/img${index + 2}.jpeg`} cardLeft={left} cardTop={top} />
              </>
            )
          },

          )}
        </div>
      </div>
    </>

  )
}
