'use client'

import FullVideo from '@/components/video/FullVideo'
import { useState } from 'react'

function Page() {
  const [currentId, setCurrentId] = useState(5)

  return (
    <div className='absolute cursor-pointer w-screen h-screen overflow-hidden top-0 left-0'>
      <FullVideo isVertical={false} url='5' />
      {/* <FullVideo isVertical={true} url='2' /> */}
    </div>

  )
}
export default Page
