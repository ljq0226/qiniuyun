'use client'
import { Icon } from '@iconify/react/dist/iconify.js';
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react';
interface Props {
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

function LoginButton({ handleMouseEnter, handleMouseLeave }: Props) {
  const { data: session } = useSession()
  useEffect(() => {
    console.log('session', session)
  }, [session])
  const handleSignIn = async () => {
    await signIn()
    //get user{email image name} 
  }

  return (
    <div className="relative h-full flex flex-center  text-white font-bold text-[22px]">
      <button
        onClick={handleSignIn}
        className="bg-[#f64556] flex flex-center space-x-2 w-[130px] h-[50px] rounded-xl">
        <Icon icon={'mingcute:user-4-line'} height={25} />
        <div>登录</div>
      </button>
    </div>
  )
}
export default LoginButton
