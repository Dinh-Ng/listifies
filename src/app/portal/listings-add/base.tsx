'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import PortalBase from '@/app/portal/base'
import Stepper from '@/app/portal/components/stepper'
import Step1 from '@/app/portal/listings-add/Step1'
import Step2 from '@/app/portal/listings-add/Step2'
import Step3 from '@/app/portal/listings-add/Step3'
import Step4 from '@/app/portal/listings-add/Step4'

const ListingAdd = ({isSale}: {isSale: boolean}) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    dob: '',
    gender: 'male',
    address: '',
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const [activeTab, setActiveTab] = useState(0)
  const [isDone, setIsDone] = useState(false)

  const formElements = [
    <Step1 />,
    <Step2 isSale={isSale} />,
    <Step3 isSale={isSale} />,
    <Step4 />,
  ]

  const submit = () => {
    console.log(data)
    setIsDone(true)
  }

  return (
    <PortalBase title={`Add / Edit Home For ${isSale ? 'Sale' : 'Lease'}`}>
      {!isDone ? (
        <div>
          <Stepper currentStep={activeTab} />
          <div>{formElements[activeTab]}</div>
          <div className="mx-auto flex flex-wrap justify-end gap-x-6 p-10">
            {activeTab !== 0 && (
              <Button
                variant="secondary"
                onClick={() => setActiveTab((prev) => prev - 1)}
              >
                Back
              </Button>
            )}
            {activeTab !== formElements.length - 1 && (
              <Button onClick={() => setActiveTab((prev) => prev + 1)}>
                Next
              </Button>
            )}
            {activeTab === formElements.length - 1 ? (
              <Button onClick={submit}>Confirm to Submit</Button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="m-auto w-full rounded-lg bg-white p-6 text-center shadow">
          <h1 className="mb-4 text-3xl font-bold">SUCCESSFULLY SUBMITTED</h1>
          <p className="mb-2">
            Your listing has been submitted and is currently under review.
          </p>
          <p>You will be notified via email once it goes live.</p>
        </div>
      )}
    </PortalBase>
  )
}

export default ListingAdd
