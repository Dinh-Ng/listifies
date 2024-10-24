import { Fragment } from 'react'

interface StepperProps {
  steps?: number
  currentStep: number
}

const Stepper = ({ steps = 4, currentStep = 1 }: StepperProps) => {
  return (
    <div className="flex w-full max-w-xl items-center py-2">
      {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
        <Fragment key={step}>
          <div className="flex items-center">
            <div
              className={`flex size-10 items-center justify-center rounded-full border-2 ${
                step === currentStep + 1
                  ? 'border-gray-800 bg-gray-800 text-white'
                  : 'border-gray-300 bg-white text-gray-800'
              }`}
            >
              {step}
            </div>
            {step < steps && (
              <div className="mx-2 h-px w-10 flex-1 bg-gray-300"></div>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Stepper
