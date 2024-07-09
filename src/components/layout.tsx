import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="font-roboto bg-white">
      <div className="container mx-auto p-4">{children}</div>
    </div>
  )
}
