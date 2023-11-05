'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { CreateUser } from '@/api/user/CreateUser.gql'
import { useMutation } from '@apollo/client'
interface Props {
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

interface SessionUser {
  name: string
  email: string
  image: string
}

function LoginButton({ handleMouseEnter, handleMouseLeave }: Props) {
  const { data: session } = useSession()
  const [createUser] = useMutation(CreateUser)
  useEffect(() => {
    const create = async () => {
      if (session) {
        const info = localStorage.getItem('user_info') as string
        if (!info) {
          const user = session?.user
          const { name, image, email } = user as SessionUser
          console.log('session', session?.user)
          const { data } = await createUser({
            variables: {
              createUserInput: {
                username: name,
                avatar: image,
                email
              },
            },
          })
          localStorage.setItem('user_info', JSON.stringify(data.createUser))
        }
      } else {
        console.log('已注册 ',)
      }
    }
    create()
  }, [session])
  const handleSignIn = async () => {
    await signIn()
    // get user{email image name}
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-full flex flex-center  text-white font-bold text-[22px]">
      <button
        onClick={handleSignIn}
        className="bg-[#f64556] flex flex-center space-x-2 w-[130px] h-[50px] rounded-xl"
      >
        <Icon icon="mingcute:user-4-line" height={25} />
        <div>登录</div>
      </button>
    </div>
  )
}
export default LoginButton
