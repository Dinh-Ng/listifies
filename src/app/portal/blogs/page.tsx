'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllBlogs } from '@/utils/firestore'
import { CirclePlus } from 'lucide-react'

import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Loading from '@/components/Loading'
import { Blog, columnsBlog } from '@/app/portal/blogs/data'
import DataTable from '@/app/portal/components/data-table'

const Blogs = () => {
  const TAB = {
    all: 'All',
    pending: 'Pending Approval',
  }

  return (
    <div className="rounded p-2 shadow-lg">
      <Tabs defaultValue={TAB.all}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Blogs</h1>

          <div className="flex">
            <TabsList>
              <TabsTrigger value={TAB.all}>{TAB.all}</TabsTrigger>
              <TabsTrigger value={TAB.pending}>{TAB.pending}</TabsTrigger>
            </TabsList>

            <Button asChild variant="ghost">
              <Link href="/portal/blogs-add">
                <CirclePlus />
              </Link>
            </Button>
          </div>
        </div>

        <TabContent value={TAB.all} />
        <TabContent value={TAB.pending} />
      </Tabs>
    </div>
  )
}

const TabContent = ({ value }: { value: string }) => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { toast } = useToast()
  console.log(blogs)

  useEffect(() => {
    fetchUserBlogs()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchUserBlogs = async () => {
    setLoading(true)
    try {
      const userBlogs = await getAllBlogs()
      setBlogs(userBlogs)
    } catch (error) {
      console.error('Error fetching user blogs:', error)
      toast({
        title: 'Error',
        description: 'Failed to fetch blogs. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <TabsContent value={value}>
      {loading ? (
        <Loading />
      ) : (
        // @ts-ignore
        <DataTable data={blogs} columns={columnsBlog} />
      )}
    </TabsContent>
  )
}

export default Blogs
