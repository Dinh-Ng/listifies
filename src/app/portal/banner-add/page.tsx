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
import { Textarea } from '@/components/ui/textarea'
import PortalBase from '@/app/portal/base'
import SaveButton from '@/app/portal/components/save-button'

const BannerAdd = () => {
  return (
    <PortalBase title="Add / Edit Banner">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter description"
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="destinationLink">Destination Link</Label>
            <Input id="destinationLink" placeholder="Enter destination link" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="license">License#</Label>
            <Select>
              <SelectTrigger id="license">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Upload className="mr-2 size-4" />
                Upload
              </Button>
              <Input
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          <SaveButton />
        </form>
      </div>
    </PortalBase>
  )
}

export default BannerAdd
