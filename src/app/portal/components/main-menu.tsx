import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

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
        <MenuItem href="/portal/leads" activeHref="/portal/leads-add">
          # Leads
        </MenuItem>
        <MenuItem href="/portal/blogs" activeHref="/portal/blogs-add">
          # Blogs
        </MenuItem>
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
