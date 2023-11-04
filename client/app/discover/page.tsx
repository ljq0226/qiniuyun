'use client'
import React, { useEffect, useState } from 'react'
import Video from '@/components/video/Video'
import useWindowSize from '@/hooks/useWindowSize'

export default function Page() {
  const { windowSize, setWindowSize } = useWindowSize()
  const [cardArrange, setCardArrange] = useState(3)
  const [cardWidth, setCardWidth] = useState((windowSize.width - 160 - 22 * 2 - 16 * 4) / 4)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      switch (true) {
        case width > 1600:
          setCardWidth((width - 160 - 22 * 2 - 16 * 2) / 3)
          setCardArrange(3)
          break
        case width > 1240:
          setCardWidth((width - 160 - 22 * 2 - 16 * 1 + 40) / 2)
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
  return (
    <div className="relative h-full w-full">
      <Video {...VideoProps} />
    </div>
  )
}
