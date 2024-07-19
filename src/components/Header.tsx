'use client'

import Link from 'next/link'
import { CircleUser, Menu, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Header = ({ href = '/' }: { href: string }) => {
  const isCurrentHref = (hrefCheck: string) => {
    return href === hrefCheck
  }

  return (
    <>
      <header className="bg-background sticky top-0 flex h-16 w-full items-center gap-4 px-4 md:px-6 lg:w-10/12">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {/*<Link*/}
          {/*  href="#"*/}
          {/*  className="flex items-center gap-2 text-lg font-semibold md:text-base"*/}
          {/*>*/}
          {/*  <Package2 className="size-6" />*/}
          {/*  <span className="sr-only">Acme Inc</span>*/}
          {/*</Link>*/}
          <Link href="#" className="hover:text-foreground text-xl">
            Listifies
          </Link>
          <Link
            href="#"
            className={
              (isCurrentHref('/')
                ? 'text-foreground'
                : 'text-muted-foreground') +
              ' hover:text-foreground transition-colors'
            }
          >
            Home
          </Link>
          <Link
            href={'/blogs'}
            className={
              (isCurrentHref('/blogs')
                ? 'text-foreground'
                : 'text-muted-foreground') +
              ' hover:text-foreground transition-colors'
            }
          >
            Blogs
          </Link>
          <Link
            href="#"
            className={
              (isCurrentHref('/listings')
                ? 'text-foreground'
                : 'text-muted-foreground') +
              ' hover:text-foreground transition-colors'
            }
          >
            Listings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="size-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              {/* <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="size-6" />
              <span className="sr-only">Listifies</span>
            </Link> */}
              <Link href="#" className="hover:text-foreground text-xl">
                Listifies
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground text-base"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground text-base"
              >
                Blogs
              </Link>
              <Link href="#" className="hover:text-foreground text-base">
                Listings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="text-muted-foreground absolute left-2.5 top-2.5 size-4" />
              <Input
                type="search"
                placeholder="Search ..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="size-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout--</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="h-px w-full bg-[#e3e3e3]" />
    </>
  )
}

export default Header
