import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={'flex flex-col items-center' + ' min-h-screen w-full'}>
      {children}
    </div>
  )
}
