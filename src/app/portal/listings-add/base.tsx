'use client'

import { useState, useRef, useEffect } from 'react'
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
  const [activeTab, setActiveTab] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const containerRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  const formElements = [
    <Step1 />,
    <Step2 isSale={isSale} />,
    <Step3 isSale={isSale} />,
    <Step4 />,
  ]

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const submit = () => {
    console.log(data)
    setIsDone(true)
  }

  // Measure the content height and update containerHeight with a smooth transition
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.offsetHeight
      setContainerHeight(contentHeight)
    }
  }, [activeTab])

  return (
    <PortalBase title={`Add / Edit Home For ${isSale ? 'Sale' : 'Lease'}`}>
      <div className='mx-auto max-w-2xl'>
        {!isDone ? (
          <div>
            <Stepper currentStep={activeTab} />
            <div
              ref={containerRef}
              style={{
                height: `${containerHeight}px`,
                transition: 'height 0.5s ease',
                overflow: 'hidden',
              }}
            >
              <div ref={contentRef}>
                {formElements[activeTab]}
              </div>
            </div>
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
              {activeTab === formElements.length - 1 && (
                <Button onClick={submit}>Confirm to Submit</Button>
              )}
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
      </div>
    </PortalBase>
  )
}

export default ListingAdd
