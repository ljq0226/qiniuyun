'use client'
import useTheme from '@/hooks/useTheme'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="text-black dark:text-white">
      <button onClick={handleClick}>切换主题</button>
    </div>
  )
}
