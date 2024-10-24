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

type Props = {
  isSale: boolean
}

export default function Step2({ isSale }: Props) {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow">
      <h2 className="mb-6 text-2xl font-bold">Home Details</h2>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="homeType">Home Type</Label>
          <Input id="homeType" defaultValue="Single Family Home" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">{isSale ? 'Price' : 'Rent'}</Label>
          <Input id="price" placeholder="Enter price" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bed">Bed</Label>
          <Select>
            <SelectTrigger id="bed">
              <SelectValue placeholder="Select number of bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5+">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bath">Bath</Label>
          <Select>
            <SelectTrigger id="bath">
              <SelectValue placeholder="Select number of bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1.5">1.5</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="2.5">2.5</SelectItem>
              <SelectItem value="3+">3+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="square">Square</Label>
          <Input id="square" placeholder="Enter square footage" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="refLink">Ref Link</Label>
          <Input id="refLink" defaultValue="propertylink.com" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter property description"
            className="min-h-[100px]"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="heroImage">Hero Image</Label>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Upload className="mr-2 size-4" />
              Upload
            </Button>
            <Input
              id="heroImage"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
