import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Step1() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow">
      <h2 className="mb-6 text-2xl font-bold">Home Address</h2>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Enter address" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="unit">Unit</Label>
          <Input id="unit" placeholder="Enter unit" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter city" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" placeholder="Enter state" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zip">Zip</Label>
          <Input id="zip" placeholder="Enter zip code" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" accept="image/*" />
        </div>
      </form>
    </div>
  )
}
