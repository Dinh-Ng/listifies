'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Editor from '@/components/editor'
import SelectImageButton from '@/components/SelectImageButton'

import PortalBase from '../base'

const AddBlog = () => {
  return (
    <PortalBase title="Add/Edit Blog Post">
      <div>
        <Editor
          onSubmit={(post) => {
            console.log(post)
          }}
          btnTitle="Save"
        />
      </div>
    </PortalBase>
  )
}

export default AddBlog
