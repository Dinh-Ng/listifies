'use client'

import Editor from '@/components/editor'
import PortalBase from '@/app/portal/base'

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
