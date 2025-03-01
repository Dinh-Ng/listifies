/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { linkType } from '@/asset/constant'

import { ListingType } from '@/app/portal/listings/base'

type Props = {
  index: string
  listing: ListingType
  href: linkType
}

export default function ListingItem({ listing, index, href }: Props) {
  const isSale = href === '/home-for-sale'
  return (
    <Link
      href={`${href}/${index}`}
      className="bg-muted/40 relative mb-4 grid items-start rounded-md sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_8fr]"
    >
      <div className="absolute z-0">
        <p className="rounded-xl bg-[#f7efe3] px-3 py-1.5 font-bold italic text-[#bd7f21]">
          {isSale ? 'For Sale' : 'For Lease'}
        </p>
      </div>
      <img
        src={'https://images.unsplash.com/photo-1570129477492-45c003edd2be'}
        alt="Post Image"
        width={150}
        height={100}
        className="mb-4 w-full md:mb-0 md:mr-4"
      />
      <div className="flex w-full justify-between p-2">
        <div>
          <h2 className="text-lg font-bold">{listing.homeType}</h2>
          <p>
            {listing.price} | {listing.bath ? '#bath' : ''} {listing.bed ? '#bed' : ''}
          </p>
          <p className="font-bold text-[#bd7f22]">
            {/* {listing.available ? 'Available' : ''} */}
            Open House
          </p>
          <div className="text-[#bd7f22]">
            <p className="hidden lg:block">
              {/* Thursday, June 7th, 2024 | 11am - 1pm */}
              {listing.date} | {listing.time}
            </p>
            <p className="block lg:hidden">
              {listing.date}
              <br />
              {listing.time}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
