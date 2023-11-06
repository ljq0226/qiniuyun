'use client'

import { useState } from 'react'
import FullVideo from '@/components/video/FullVideo'

function Page() {
  const [currentId, setCurrentId] = useState(5)

  return (
    <div className="absolute cursor-pointer w-screen h-screen overflow-hidden top-0 left-0">
      <FullVideo isVertical={false} videoUrl='' coverImg='asd' />
      {/* <FullVideo isVertical={true} url='2' /> */}
    </div>

  )
}
export default Page
