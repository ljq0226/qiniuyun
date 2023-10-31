'use client'
import { Icon } from '@iconify/react'
import HotSearch from './HotSearch'

function SearchInput() {
  return (
    <>
      <div className="py-4 w-[333px] h-full relative">
        <div className="w-full flex  h-full  text-[22px]  border-2 border-solid border-[rgba(0,0,0,.7)] rounded-xl ">
          <input type="text" className="px-2 outline-none caret-[var(--c-text-t2)] bg-transparent flex-[0.7]" />
          <button className="flex space-x-2  flex-center flex-[0.3]">
            <Icon icon="fluent-emoji:magnifying-glass-tilted-left" />
            <div>搜索</div>
          </button>
        </div>
        <HotSearch />
      </div>
    </>

  )
}

export default SearchInput
