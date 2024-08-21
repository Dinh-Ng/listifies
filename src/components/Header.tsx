import Link from 'next/link'
import { Menu, Search } from 'lucide-react'

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

const Header = ({href}: {href: string}) => {
  return (
    <header className="bg-background sticky top-0 grid w-full grid-cols-3 p-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="">
            <Menu className="size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-[#3d3c3c]">
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
          <nav className="mt-10 grid gap-6 text-lg font-medium">
            <form className="flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="text-muted-foreground absolute left-2.5 top-2.5 size-4" />
                <Input
                  type="search"
                  placeholder="Search ..."
                  className="w-full pl-8"
                />
              </div>
            </form>
            <Link
              href="/"
              className="h-5 text-base text-white hover:text-white/50"
            >
              Home
            </Link>
            <Link
              href={'/blogs'}
              className="h-5 text-base text-white hover:text-white/50"
            >
              Blogs
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-5 justify-start p-0 text-left"
                >
                  <span className="cursor-pointer text-base text-white hover:text-white/50">
                    Listings
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href={'/listings'}>Properties for Sale</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={'/listings'}>Properties for Lease</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex justify-center">
        <p className="text-3xl font-bold">Listifies</p>
      </div>
      <div className="flex justify-end">
        <Button>Add Listing</Button>
      </div>
    </header>
  )
}

export default Header
