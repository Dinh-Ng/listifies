import Link from 'next/link'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import PortalBase from '@/app/portal/base'
import SaveButton from '@/app/portal/components/save-button'

const QuestionAnswer = () => {
  return (
    <PortalBase title="Answer">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6">
        <div className="mx-auto w-full max-w-2xl bg-white">
          <dl className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <dt className="font-semibold text-gray-700">Questions</dt>
              <dd className="sm:col-span-2">Where does it come from?</dd>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <dt className="font-semibold text-gray-700">Subject</dt>
              <dd className="sm:col-span-2">
                t is a long established fact that a reader will be distracted
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <dt className="font-semibold text-gray-700">Ref Link</dt>
              <dd className="sm:col-span-2">
                <Link
                  href="http://www.listifies.com/reflink"
                  className="text-blue-600 hover:underline"
                >
                  www.listifies.com/reflink
                </Link>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <dt className="font-semibold text-gray-700">Name</dt>
              <dd className="sm:col-span-2">Phung Pham</dd>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <dt className="font-semibold text-gray-700">Email</dt>
              <dd className="sm:col-span-2">phung@gmail.com</dd>
            </div>
          </dl>
        </div>
        <form className="mt-5 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="answer" className="font-semibold">
              Answer
            </Label>
            <Textarea
              id="answer"
              placeholder="Enter your answer here"
              className="min-h-[100px] w-full"
            />
          </div>

          <SaveButton />
        </form>
      </div>
    </PortalBase>
  )
}

export default QuestionAnswer
