/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

type Props = {
  index: number
  listing: {
    title: string,
    author: string,
    date: string,
    category: string,
    language: string,
    imageUrl: string,
    width: number,
    height: number,
    available?: boolean,
    price: string,
    tags: string,
  }
}

export default function ListingItem({ listing, index }: Props) {
  return (
    <Link
      key={index}
      href={`/listings/${index}`}
      className="mb-4 flex flex-col items-start rounded-md border p-4 md:flex-row"
    >
      <img
        src={listing.imageUrl}
        alt="Post Image"
        width={listing.width}
        height={listing.height}
        className="mb-4 md:mb-0 md:mr-4"
      />
      <div>
        <h2 className="text-lg font-bold">{listing.title}</h2>
        <p>
          {listing.price} | {listing.tags}
        </p>
        <p className="font-bold text-[#bd7f22]">
          {listing.available ? 'Available' : ''}
        </p>
      </div>
    </Link>
  )
}
