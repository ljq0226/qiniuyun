import Avatar from '../ui/Avatar'
import SearchInput from './SearchInput'

function Header() {
  return (

    <header className=" w-full h-[var(--h-header)] fixed flex flex-center items-center  ">
      <div className="lg:flex-[0.3]"></div>

      <SearchInput />
      <div className="flex-[0.7]"></div>

      <div className="align-right absolute right-[150px] lg:right-[300px]">
        <Avatar src="/img/user2.webp" round />
      </div>
    </header>

  )
}

export default Header
