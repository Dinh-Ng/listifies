/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { linkType } from '@/asset/constant'

type Props = {
  index: number
  listing: {
    title: string
    author: string
    date: string
    category: string
    language: string
    imageUrl: string
    width: number
    height: number
    available?: boolean
    price: string
    tags: string
  }
  href: linkType
}

export default function ListingItem({ listing, index, href }: Props) {
  return (
    <Link
      key={index}
      href={`${href}/${index}`}
      className="bg-muted/40 relative mb-4 flex flex-col items-start rounded-md md:flex-row"
    >
      <div className="absolute">
        <p className="rounded-xl bg-[#f7efe3] px-3 py-1.5 font-bold italic text-[#bd7f21]">
          {href === '/home-for-sale' ? 'For Sale' : 'For Lease'}
        </p>
      </div>
      <img
        src={listing.imageUrl}
        alt="Post Image"
        width={listing.width}
        height={listing.height}
        className="mb-4 w-full md:mb-0 md:mr-4 lg:w-[150px]"
      />
      <div className="flex w-full justify-between p-2 lg:px-0">
        <div>
          <h2 className="text-lg font-bold">{listing.title}</h2>
          <p>
            {listing.price} | {listing.tags}
          </p>
          <p className="font-bold text-[#bd7f22]">
            {/* {listing.available ? 'Available' : ''} */}
            Open House
          </p>
          <div className="text-[#bd7f22]">
            <p className="hidden lg:block">
              Thursday, June 7th, 2024 | 11am - 1pm
            </p>
            <p className="block lg:hidden">
              Thursday, June 7th, 2024
              <br />
              11am - 1pm
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
