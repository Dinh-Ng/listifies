import Link from 'next/link'

const NavigationSection = ({ currentHref }: { currentHref: string }) => {
  const isCurrent = (href: string): React.ComponentProps<'div'>['className'] =>
    currentHref === href ? 'font-bold' : ''

  const data = [
    { href: '/', title: 'Home' },
    { href: '/blogs', title: 'Blogs' },
    { href: '/listings', title: 'Listings' },
    { href: '/update', title: 'Update' },
  ]

  const LinkItem = ({ href, title }: { href: string; title: string }) => {
    return (
      <Link href={href} className={isCurrent(href)}>
        {title}
      </Link>
    )
  }

  return (
    <div className="hidden gap-3 lg:grid">
      {data.map((item, index) => (
        <LinkItem href={item.href} title={item.title} key={index} />
      ))}
    </div>
  )
}

export default NavigationSection
