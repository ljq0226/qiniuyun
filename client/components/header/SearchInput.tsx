'use client'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import HotSearch from './HotSearch'

function SearchInput() {
  const [isShow, setIsShow] = useState(false)
  const handleMouseEnter = () => {
    setIsShow(true)
  }

  const handleMouseLeave = () => {
    setIsShow(false)
  }

  return (
    <>
      <div
        className="relative py-4 w-[--w-header-input] lg:w-[--w-header-input-w2] h-full "
      >
        <div
          className="w-full flex  h-full  text-[22px]  border-2 border-solid border-[rgba(0,0,0,.7)] rounded-xl "
          onMouseEnter={handleMouseEnter}
        >
          <input type="text" className="px-2 outline-none caret-[var(--c-text-t2)] bg-transparent flex-[0.7]" />
          <button className="flex space-x-2  flex-center flex-[0.3]">
            <Icon icon="fluent-emoji:magnifying-glass-tilted-left" />
            <div>搜索</div>
          </button>
        </div>
        <div
          className="left-0 z-50 top-0 mt-[--h-header] absolute drop-shadow-2xl p-6 w-[--w-header-input] lg:w-[--w-header-input-w2]
           border border-solid border-[var(--c-secondary-default)] rounded-2xl
           bg-[var(--c-bg-b1)]"
          style={{ top: isShow ? 0 : -1000 }}
          // style={{ display: isShow ? 'block' : 'none' }}
          onMouseLeave={handleMouseLeave}
        >
          <HotSearch />
        </div>
      </div>

    </>

  )
}

export default SearchInput
