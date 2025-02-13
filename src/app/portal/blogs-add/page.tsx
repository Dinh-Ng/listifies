'use client'

import { useAuth } from '@/contexts/AuthContext'
import { addBlog } from '@/utils/firestore'

import { useToast } from '@/hooks/use-toast'
import Editor from '@/components/editor'
import PortalBase from '@/app/portal/base'

const AddBlog = () => {
  const { user } = useAuth()
  const { toast } = useToast()

  const onSubmit = async (post: any) => {
    console.log('submit', post)
    try {
      await addBlog(user?.uid, user?.displayName, post)
      toast({
        title: 'Success',
        description: 'Blog post created successfully!',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create blog post. Please try again.',
        variant: 'destructive',
      })
      console.log('error', error)
    }
  }

  return (
    <PortalBase title="Add/Edit Blog Post">
      <div>
        <Editor onSubmit={onSubmit} btnTitle="Save" />
      </div>
    </PortalBase>
  )
}

export default AddBlog
