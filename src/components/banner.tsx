export default function Banner() {
  const banners = [
    { text: '1% Down & 2% Grant', link: '#', linkText: 'Learn More' },
    { text: '$7,500 Grant', link: '#', linkText: 'Learn More' },
    { text: 'Loan Officer Info Card', link: '#', linkText: 'Contact Now' },
  ]

  return (
    <aside>
      {banners.map((banner, index) => (
        <div key={index} className="mb-4 border p-4">
          <p>{banner.text}</p>
          <a href={banner.link} className="font-bold text-blue-500">
            {banner.linkText}
          </a>
        </div>
      ))}
    </aside>
  )
}
