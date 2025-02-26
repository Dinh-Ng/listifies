import Link from 'next/link'

import { Step1Data } from './Step1'
import { Step2Data } from './Step2'
import { Step3Data } from './Step3'

interface Step4Props {
  step1Data: Step1Data
  step2Data: Step2Data
  step3Data: Step3Data
  isSale: boolean
}

export default function Step4({
  step1Data,
  step2Data,
  step3Data,
  isSale,
}: Step4Props) {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Review & Confirm to submit this listing
      </h2>
      <div className="mb-4 grid grid-cols-1 gap-6 rounded-lg bg-gray-100 p-4 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-semibold">{`For ${isSale ? 'Sale' : 'Lease'} • $${step2Data.price}`}</h3>
          <p className="text-sm text-gray-600">{`${step1Data.address} ${step1Data.city} ${step1Data.zip}`}</p>
          <p className="text-sm text-gray-600">#beds • #bath • ## sq feet</p>
          <p className="text-sm text-gray-600">{`${step2Data.refLink}`}</p>
        </div>
        <div className="italic">
          <h3 className="mb-2 font-semibold">Open House Info</h3>
          <p className="text-sm text-gray-600">{step3Data.date}</p>
          <p className="text-sm text-gray-600">{step3Data.time}</p>
        </div>
        <div className="italic">
          <h3 className="mb-2 font-semibold">Contact Person</h3>
          <p className="text-sm text-gray-600">{step3Data.name}</p>
          <p className="text-sm text-gray-600">{step3Data.phone}</p>
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
