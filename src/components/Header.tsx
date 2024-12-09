'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LinkMapping, linkType } from '@/asset/constant'
import logo from '@/asset/img/listifies_logo.svg'
import { Menu, User } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Header = ({ href }: { href: linkType }) => {
  const { user, signOut } = useAuth()

  const isCurrentHref = (hrefCheck: string) => {
    return href === hrefCheck
  }
  console.log('first', process.env.NEXT_PUBLIC_TEST)

  const LinkItem = ({ href }: { href: linkType }) => (
    <Link
      href={href}
      className={
        (isCurrentHref(href) ? 'font-bold' : '') +
        ' h-5 text-base text-white hover:text-white/50'
      }
    >
      {LinkMapping.get(href)}
    </Link>
  )

  const AddListingButton = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-black">
          Add Listing
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/add-listing/home-for-sale">Home for Sale</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/add-listing/home-for-lease">Home for Lease</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="flex items-center space-x-2">
          <Avatar className="size-8">
            <AvatarImage src={user?.photoURL || ''} alt={user?.displayName || 'User avatar'} />
            <AvatarFallback><User className="size-4" /></AvatarFallback>
          </Avatar>
          <span className=''>{user?.displayName || user?.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/portal">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <header className="bg-background sticky top-0 z-10 grid w-full grid-cols-3 p-2 shadow-lg">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="">
            <Menu className="size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="overflow-scroll border-none bg-zinc-800"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
          <nav className="mt-10 grid gap-6 text-lg font-medium">
            <form className="flex-1 sm:flex-initial">
              <div className="relative">
                {/* <Search className="text-muted-foreground absolute left-2.5 top-2.5 size-4" /> */}
                <Input
                  type="search"
                  placeholder="Search ..."
                  className="w-full pl-8"
                />
              </div>
            </form>
            <LinkItem href="/" />
            <LinkItem href="/blogs" />
            <p className="h-5 text-base text-white">Listings</p>
            <div className="ml-6 grid gap-6">
              <LinkItem href="/home-for-sale" />
              <LinkItem href="/home-for-lease" />
            </div>
            <LinkItem href="/update" />
            <LinkItem href="/loan-solution" />
            <div className="lg:hidden">
              <AddListingButton />
            </div>

            {/* <Button asChild variant="outline">
              <Link href="/portal/">Portal</Link>
            </Button> */}

            {user ? (
              <UserMenu />
            ) : (
              <Button asChild variant="outline">
                <Link href="/auth/">Login</Link>
              </Button>
            )}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex justify-center">
        {/* <p className="text-3xl font-bold">Listifies</p> */}
        <Link href={'/'} className="px-10">
          <Image
            src={logo}
            alt="logo"
            className="h-12 w-full scale-[2]"
            priority
          />
        </Link>
      </div>
      <div className="hidden justify-end lg:flex">
        <AddListingButton />
      </div>
    </header>
  )
}

export default Header
