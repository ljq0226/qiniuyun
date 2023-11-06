'use client'
import { useState } from 'react'
import SearchInput from './SearchInput'
import UserAvatar from './UserAvatar'
import LoginButton from './LoginButton'
import UserPop from './UserPop'
import useTheme from '@/hooks/useTheme'
import { UserStore, LayoutSotre } from '@/store'


interface UserInfo {
  uid: string
  username: string
  avatar: string
}

function Header() {
  const isFull = LayoutSotre(s => s.isFull)
  const uid = UserStore(s => s.uid)
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

  const handleEvent = {
    handleMouseLeave,
    handleMouseEnter,
  }
  const userpop = {
    isShow,
    handleClick,
    ...handleEvent,
  }

  return (

    <header style={{ position: isFull ? 'relative' : 'fixed' }} className="z-[5] w-full h-[var(--h-header)] flex flex-center items-center  ">
      <div className="lg:flex-[0.3]"></div>
      <SearchInput />
      <div className="flex-[0.7]"></div>

      <div className="align-right  h-full mr-3 lg:mr-10">
        {uid
          ? <UserAvatar {...handleEvent} />
          : <LoginButton {...handleEvent} />}
        <UserPop {...userpop} />
      </div>
    </header>

  )
}

export default Header
