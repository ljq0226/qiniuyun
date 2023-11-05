'use client'
import { useEffect, useState } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const [hasExecutedEffect, setHasExecutedEffect] = useState(false)

  useEffect(() => {
    // 只有在 hasExecutedEffect 为 false 时执行代码
    if (!hasExecutedEffect) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setHasExecutedEffect(true)
    }
  }, [hasExecutedEffect])
  useEffect(() => {
    const handleResize = () => {
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

  return { windowSize, setWindowSize }
}

export default useWindowSize
