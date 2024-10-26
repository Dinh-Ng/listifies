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

const UserAdd = () => {
  return (
    <PortalBase title="Add / Edit User">
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
            <Select defaultValue="realEstateAgent">
              <SelectTrigger id="occupation">
                <SelectValue placeholder="Select your occupation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realEstateAgent">
                  Real Estate Agent
                </SelectItem>
                <SelectItem value="broker">Broker</SelectItem>
                <SelectItem value="propertyManager">
                  Property Manager
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Upload className="mr-2 size-4" />
                Upload
              </Button>
              <Input
                id="profilePicture"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="licenseNumber">License#</Label>
            <Input id="licenseNumber" placeholder="Enter your license number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select your status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div />
          <SaveButton />
        </form>
      </div>
    </PortalBase>
  )
}

export default UserAdd
