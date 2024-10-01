'use client'

import { useState } from 'react'
import { MenuIcon } from 'lucide-react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

import MainMenu from './components/main-menu'
import MenuTitle from './components/menu-title'

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="h-screen md:grid md:grid-cols-[250px_1fr]">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="bg-background border-border sticky left-0 top-0 flex justify-between border-b p-4 md:hidden">
          <MenuTitle />
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Hello, User-Name</h1>
        {children}
      </div>
    </div>
  )
}
