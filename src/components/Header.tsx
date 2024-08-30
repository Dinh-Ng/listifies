import Image from 'next/image'
import Link from 'next/link'
import { LinkMapping, linkType } from '@/asset/constant'
import logo from '@/asset/img/listifies_logo.svg'
import { Menu, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const Header = ({ href }: { href: linkType }) => {
  const isCurrentHref = (hrefCheck: string) => {
    return href === hrefCheck
  }

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

  return (
    <header className="bg-background sticky top-0 grid w-full grid-cols-3 p-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="">
            <Menu className="size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-[#7a7a7a]">
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
            <LinkItem href="/" />
            <LinkItem href="/blogs" />
            <p className="h-5 text-base text-white">Listings</p>
            <div className="ml-6 grid gap-6">
              <LinkItem href="/home-for-sale" />
              <LinkItem href="/home-for-lease" />
            </div>
            <LinkItem href="/update" />
            <LinkItem href="/loan-solution" />
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex justify-center">
        {/* <p className="text-3xl font-bold">Listifies</p> */}
        <Image
          src={logo}
          alt="logo"
          className="h-12 w-full scale-[2]"
          priority
        />
      </div>
      <div className="flex justify-end">
        <Button variant="outline" className="border-black">
          Add Listing
        </Button>
      </div>
    </header>
  )
}

export default Header
