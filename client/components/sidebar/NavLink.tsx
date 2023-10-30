'use client'
import { Icon } from '@iconify/react'
import type { NavLinkState as Props } from './data'

function NavLink({ icon, href, title }: Props) {
  return (
    <div className="sidebar-navlink-item">
      <div className="flex flex-center lg:mr-4 w-[37px]">
        <Icon icon={icon} height={28} />
      </div>
      <div>
        {title}
      </div>
    </div>
  )
}

export default NavLink
