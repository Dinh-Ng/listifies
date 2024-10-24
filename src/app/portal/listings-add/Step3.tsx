import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {
  isSale: boolean
}

export default function Step3({ isSale }: Props) {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow">
      <h2 className="mb-6 text-2xl font-bold">Open House Info</h2>
      <form className="space-y-6">
        {isSale ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" placeholder="Select date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" placeholder="Select time" />
            </div>
          </div>
        ) : null}

        <div>
          <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
