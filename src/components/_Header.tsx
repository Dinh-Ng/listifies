'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  CircleUser,
  Menu,
  Search,
  SlidersHorizontal,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
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
      <header className="bg-background sticky top-0 flex h-16 w-full items-center gap-4 px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {/*<Link*/}
          {/*  href="#"*/}
          {/*  className="flex items-center gap-2 text-lg font-semibold md:text-base"*/}
          {/*>*/}
          {/*  <Package2 className="size-6" />*/}
          {/*  <span className="sr-only">Acme Inc</span>*/}
          {/*</Link>*/}
          <Link href="/" className="hover:text-foreground text-xl">
            Listifies
          </Link>
          <Link
            href="/"
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
          {/* <Link
            href={'/listings'}
            className={
              (isCurrentHref('/listings')
                ? 'text-foreground'
                : 'text-muted-foreground') +
              ' hover:text-foreground transition-colors'
            }
          >
            Listings
          </Link> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <span className="text-muted-foreground">Listings</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
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
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="size-6" />
              <span className="sr-only">Listifies</span>
            </Link> */}
              <Link href="/" className="hover:text-foreground text-xl">
                Listifies
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground h-5 text-base"
              >
                Home
              </Link>
              <Link
                href={'/blogs'}
                className="text-muted-foreground hover:text-foreground h-5 text-base"
              >
                Blogs
              </Link>
              {/* <Link
                href={'/listings'}
                className="hover:text-foreground text-base"
              >
                Listings
              </Link> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-5 justify-start p-0 text-left"
                  >
                    <span className="text-muted-foreground hover:text-foreground text-base">
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
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <SlidersHorizontal className="size-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Languages</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Locations</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Listing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <FilterMenu />
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

const FilterMenu = () => {
  const languageList = ['English', 'Vietnamese', 'Spanish']
  const [language, setLanguage] = useState(languageList[0])

  const locationList = ['Vietnam', 'USA', 'Spain']
  const [location, setLocation] = useState(locationList[0])

  const listingsList = ['Propertyies for Lease', 'Propertyies for Sell', 'All']
  const [listings, setListings] = useState(listingsList[0])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <SlidersHorizontal className="size-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
        </DialogHeader>
        <p>Content Languages</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={'outline'} className="w-full justify-between">
              {language}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px]">
            <DropdownMenuRadioGroup
              value={language}
              onValueChange={setLanguage}
            >
              {languageList.map((item) => (
                <DropdownMenuRadioItem key={item} value={item}>
                  {item}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <p>Location</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={'outline'} className="w-full justify-between">
              {location}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px]">
            <DropdownMenuRadioGroup
              value={location}
              onValueChange={setLocation}
            >
              {locationList.map((item) => (
                <DropdownMenuRadioItem key={item} value={item}>
                  {item}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <p>Listings</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={'outline'} className="w-full justify-between">
              {listings}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px]">
            <DropdownMenuRadioGroup
              value={listings}
              onValueChange={setListings}
            >
              {listingsList.map((item) => (
                <DropdownMenuRadioItem key={item} value={item}>
                  {item}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant={'secondary'}>Save</Button>
      </DialogContent>
    </Dialog>
  )
}

export default Header
