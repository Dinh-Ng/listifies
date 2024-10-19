import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const SaveButton = () => {
  return (
    <div className="flex">
      <Button type="submit" className="mr-px rounded-r-none px-8">
        Save
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-2">
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="right">
          <DropdownMenuItem>Publish</DropdownMenuItem>
          <DropdownMenuItem>Archive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SaveButton
