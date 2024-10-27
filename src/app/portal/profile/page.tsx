import { Upload } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import PortalBase from '@/app/portal/base'
import SaveButton from '@/app/portal/components/save-button'

const Profile = () => {
  return (
    <PortalBase title="Profile">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6">
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter your last name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Select>
              <SelectTrigger id="occupation">
                <SelectValue placeholder="Dropdown of careers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="headshot">Headshot</Label>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Upload className="mr-2 size-4" />
                Upload
              </Button>
              <Input
                id="headshot"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="licenseNumber">License#</Label>
            <Input id="licenseNumber" placeholder="Enter your license number" />
          </div>

          <SaveButton />
        </form>
      </div>
    </PortalBase>
  )
}

export default Profile
