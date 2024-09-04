/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const LoanItem = () => {
  return (
    <Link
      href={'/loan-solution/0'}
      className="bg-muted/40 mb-1 flex flex-col items-start rounded-md md:flex-row"
    >
      <img
        src={'https://images.unsplash.com/photo-1570129477492-45c003edd2be'}
        alt="Post Image"
        className="mb-4 w-full md:mb-0 md:mr-4 lg:w-[150px]"
      />
      <div className="flex w-full justify-between">
        <div>
          <h2 className="text-lg font-bold">DSCR Loans</h2>
          <p className="">Description</p>
        </div>
      </div>
    </Link>
  )
}

export default LoanItem
