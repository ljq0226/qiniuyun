'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'
import Avatar from '../ui/Avatar'
import useTheme from '@/hooks/useTheme'

function UserAvatar() {
  const { theme, setTheme } = useTheme()
  const [isShow, setIsShow] = useState(false)
  const handleMouseEnter = () => {
    setIsShow(true)
  }

  const handleMouseLeave = () => {
    setIsShow(false)
  }

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  function cn(): string | undefined {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <div className="relative" onMouseEnter={handleMouseEnter}>
        <Avatar src="/img/user2.webp" round />
      </div>
      <div
        onMouseLeave={handleMouseLeave}
        style={{ display: isShow ? 'block' : 'none' }}
        className="flex px-4 absolute right-0 top-0 mt-[50px] bg-[var(--c-bg-b1)] flex-col w-[--w-header-useravatar] h-[--h-header-useravatar] border border-solid border-[var(--c-secondary-default)] rounded-2xl"
      >
        <div className="pt-4 w-full overflow-hidden text-[--c-text-t0] text-[20px] font-semibold ">
          <div className="w-[40%]">
            <p className=" truncate">用户248938748124132</p>
          </div>
        </div>
        <div className="flex p-4 ">
          <div className="flex mx-auto  cursor-pointer flex-col hover:text-[--c-text-t0] flex-center w-24">
            <Icon height={24} icon="fluent-emoji-flat:play-button" />
            <div className="boldfont my-1">0</div>
            <div className="">我的作品</div>
          </div>
          <div className="flex mx-auto  flex-col cursor-pointer  hover:text-[--c-text-t0]   flex-center w-24">
            <Icon height={24} icon="fluent-emoji-flat:sparkling-heart" />
            <div className="boldfont my-1">0</div>
            <div className="">我的喜欢</div>
          </div>
          <div className="flex mx-auto  flex-col cursor-pointer hover:text-[--c-text-t0]   flex-center w-24">
            <Icon height={26} icon="fluent-emoji-flat:glowing-star" />
            <div className="boldfont my-1">0</div>
            <div className="">我的收藏</div>
          </div>

          <div className="flex mx-auto  flex-col cursor-pointer  hover:text-[--c-text-t0] flex-center w-24">
            <Icon height={24} icon="twemoji:three-oclock" />
            <div className="boldfont my-1">0</div>
            <div className="">观看历史</div>
          </div>
        </div>
        <div className="flex justify-end space-x-2 w-full pr-10 ">
          <div className="flex flex-center hover:text-[--c-text-t0]">
            <Icon icon="icon-park-outline:clothes-crew-neck" height={18}></Icon>
            <button className="ml-1" onClick={handleClick}>切换主题</button>
          </div>
          <div className="cursor-pointer hover:text-[--c-text-t0]">
            设置
          </div>
        </div>
      </div>
    </>
  )
}
export default UserAvatar
