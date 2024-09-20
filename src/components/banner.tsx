import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Banner() {
  const banners = [
    { text: '1% Down & 2% Grant', link: '#', linkText: 'Learn More' },
    { text: '$7,500 Grant', link: '#', linkText: 'Learn More' },
    { text: 'Loan Officer Info Card', link: '#', linkText: 'Contact Now' },
  ]

  return (
    <aside>
      <h1 className="mb-6 pl-2 text-xl font-semibold">Sponsored</h1>
      {banners.map((banner, index) => (
        <Card key={index} className="mb-4 border-none shadow-lg">
          <CardHeader>
            <CardTitle>{banner.text}</CardTitle>
          </CardHeader>
          <CardContent>
            <a href={banner.link} className="font-bold text-blue-500">
              {banner.linkText}
            </a>
          </CardContent>
        </Card>
      ))}
    </aside>
  )
}
