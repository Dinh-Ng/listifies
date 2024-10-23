import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

import MenuItem from './menu-item'
import MenuTitle from './menu-title'

export default function MainMenu({ className }: { className?: string }) {
  return (
    <nav
      className={cn('md:bg-muted flex flex-col overflow-auto p-4', className)}
    >
      <header className="hidden border-b border-b-zinc-300 pb-4 md:block dark:border-b-black">
        <MenuTitle />
      </header>
      <ul className="grow py-4">
        <p className="p-2">Listings</p>
        <MenuItem
          href="/portal/listings/home-for-sales"
          activeHref="/portal/leads-add"
        >
          # Home for Sales
        </MenuItem>
        <MenuItem
          href="/portal/listings/home-for-lease"
          activeHref="/portal/leads-add"
        >
          # Home for Lease
        </MenuItem>
        <Separator className="bg-zinc-300" />
        <MenuItem href="/portal/leads" activeHref="/portal/leads-add">
          # Leads
        </MenuItem>
        <MenuItem href="/portal/blogs" activeHref="/portal/blogs-add">
          # Blogs
        </MenuItem>
        <Separator className="bg-zinc-300" />
      </ul>
      <footer className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
      </footer>
    </nav>
  )
}
