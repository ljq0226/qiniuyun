'use client'
import cn from 'clsx'
function formatTime(time: number): string {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${formattedMinutes}:${formattedSeconds}`
}
interface Props {
  currentTime: number, duration: number, className?: string
}

const useVideoTime: React.FC<Props> = ({ currentTime, duration, className }: Props) => {
  const formattedCurrentTime = formatTime(currentTime)
  const formattedDuration = formatTime(duration)
  return (
    <div className={cn('ml-2', className)}>
      {formattedCurrentTime}
      {' '}
      /
      {formattedDuration}
    </div>
  )
}
export default useVideoTime
