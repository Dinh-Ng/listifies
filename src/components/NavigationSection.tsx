import Link from 'next/link'
import { LinkMapping, linkType } from '@/asset/constant'
import React from 'react'

const NavigationSection = ({ currentHref }: { currentHref: linkType }) => {
  const isCurrent = (href: linkType): React.ComponentProps<'div'>['className'] =>
    currentHref === href ? 'font-bold' : ''

  const LinkItem = ({ href }: { href: linkType }) => {
    return (
      <Link href={href} className={isCurrent(href)}>
        {LinkMapping.get(href)}
      </Link>
    )
  }

  return (
    <div className="hidden gap-3 lg:grid">
      {/* <LinkItem href="/" /> */}
      {/* <LinkItem href="/blogs" /> */}
      <p>Listings</p>
      <div className="grid gap-3 pl-2">
        <LinkItem href="/home-for-sale" />
        <LinkItem href="/home-for-lease" />
      </div>
      <LinkItem href='/update' />
      <LinkItem href='/loan-solution' />
    </div>
  )
}

export default NavigationSection
