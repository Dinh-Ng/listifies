import Link from 'next/link'

export default function Step4() {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Review & Confirm to submit this listing
      </h2>
      <div className="mb-4 grid grid-cols-1 gap-6 rounded-lg bg-gray-100 p-4 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-semibold">For Sale • $300,000</h3>
          <p className="text-sm text-gray-600">Address, City, State zip-code</p>
          <p className="text-sm text-gray-600">#beds • #bath • ## sq feet</p>
          <p className="text-sm text-gray-600">Ref Link</p>
        </div>
        <div className="italic">
          <h3 className="mb-2 font-semibold">Open House Info</h3>
          <p className="text-sm text-gray-600">
            Thursday, September 20th, 2024
          </p>
          <p className="text-sm text-gray-600">11:00am - 01:00pm</p>
        </div>
        <div className="italic">
          <h3 className="mb-2 font-semibold">Contact Person</h3>
          <p className="text-sm text-gray-600">Phung Pham</p>
          <p className="text-sm text-gray-600">(123) 465-9876</p>
        </div>
      </div>
      <p className="mb-4 text-sm text-gray-600">
        * By submitting this listing, you confirm that you are either the owner
        of the listed property or business, or you have the authorization to
        list it on behalf of the owners. Additionally, you agree to our{' '}
        <Link href="/terms" className="text-blue-600 hover:underline">
          terms & conditions
        </Link>
        .
      </p>
    </div>
  )
}
