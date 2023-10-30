import NavLink from './NavLink'
import '@/styles/sidebar.css'
import type { NavLinkState } from './data'
import { NavLinks } from './data'

function SideBar() {
  return (
    <aside>
      <div className="sidebar">
        <div className="fixed w-[var(--w-sidebar-w1)] lg:w-[var(--w-sidebar-w2)] h-[var(--h-header)] flex-center">
          Logo
        </div>
        <div className="flex flex-col h-full overflow-y-scroll px-3 lg:px-6 mt-[var(--h-header)] select-none">
          {NavLinks.map((item: NavLinkState) => (
            <NavLink {...item} key={item.href} />
          ))}
        </div>
      </div>
    </aside>

  )
}

export default SideBar
