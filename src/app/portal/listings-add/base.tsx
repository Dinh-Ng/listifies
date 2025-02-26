'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import PortalBase from '@/app/portal/base'
import Stepper from '@/app/portal/components/stepper'
import Step1, { type Step1Data } from '@/app/portal/listings-add/Step1'
import Step2, { type Step2Data } from '@/app/portal/listings-add/Step2'
import Step3, { type Step3Data } from '@/app/portal/listings-add/Step3'
import Step4 from '@/app/portal/listings-add/Step4'
import { useToast } from '@/hooks/use-toast'
import { addHomeForLease, addHomeForSale } from '@/utils/firestore'

const ListingAdd = ({ isSale }: { isSale: boolean }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const containerRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const {toast} = useToast()

  const [step1Data, setStep1Data] = useState<Step1Data>({
    address: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    image: null,
  })
  const [step2Data, setStep2Data] = useState<Step2Data>({
    homeType: 'Single Family Home',
    price: '',
    bed: '',
    bath: '',
    square: '',
    refLink: 'propertylink.com',
    description: '',
    heroImage: null,
  })
  const [step3Data, setStep3Data] = useState<Step3Data>({
    date: '',
    time: '',
    name: '',
    phone: '',
  })

  const handleStep1DataChange = useCallback((data: Step1Data) => setStep1Data(data), [])
  const handleStep2DataChange = useCallback((data: Step2Data) => setStep2Data(data), [])
  const handleStep3DataChange = useCallback((data: Step3Data) => setStep3Data(data), [])

  const formElements = [
    <Step1 key="step1" onDataChange={handleStep1DataChange} data={step1Data} />,
    <Step2
      key="step2"
      onDataChange={handleStep2DataChange}
      // data={step2Data}
      isSale={isSale}
    />,
    <Step3
      key="step3"
      onDataChange={handleStep3DataChange}
      data={step3Data}
      isSale={isSale}
    />,
    <Step4
      key="step4"
      step1Data={step1Data}
      step2Data={step2Data}
      step3Data={step3Data}
      isSale={isSale}
    />,
  ]

  const submit = async () => {
    const data = { ...step1Data, ...step2Data, ...step3Data}
    try {
      if (isSale) {
        await addHomeForSale(data)
      } else {
        await addHomeForLease(data)
      }
      setIsDone(true)
    } catch (err) {
      console.error(err)
      toast({
        title: 'Error',
        description: 'An error occurred while submitting the listing',
        variant: 'destructive',
      })
    }
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
      <div className="mx-auto max-w-2xl">
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
              <div ref={contentRef}>{formElements[activeTab]}</div>
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
