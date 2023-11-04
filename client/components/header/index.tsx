import SearchInput from './SearchInput'
import UserAvatar from './UserAvatar'

function Header() {
  return (

    <header className="z-10 w-full h-[var(--h-header)] fixed flex flex-center items-center  ">
      <div className="lg:flex-[0.3]"></div>
      <SearchInput />
      <div className="flex-[0.7]"></div>

      <div className="align-right absolute right-[150px] lg:right-[300px]">
        <UserAvatar />
      </div>
    </header>

  )
}

export default Header
