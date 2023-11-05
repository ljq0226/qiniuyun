import Avatar from '../ui/Avatar'

interface Props {
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

function UserAvatar({ handleMouseEnter, handleMouseLeave }: Props) {
  return (
    <>
      <div
        className="relative flex flex-center h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Avatar height={14} src="/img/user2.webp" round />
      </div>

    </>
  )
}
export default UserAvatar
