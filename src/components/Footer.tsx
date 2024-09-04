import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const Footer = () => {
  return (
    <div className="mt-4">
      <Card className="rounded-none border-none bg-zinc-800 text-white">
        <CardContent className="mx-auto grid w-full grid-cols-1 py-4 lg:grid-cols-5">
          <p className="mb-4 text-4xl font-bold">Listifies</p>
          <div className="mb-7 flex flex-col lg:mb-0">
            <p className="text-xl font-bold">Company</p>
            <Link href="#" className="mt-3">
              About Us
            </Link>
            <Link href="#" className="mt-1">
              Blogs
            </Link>
            <Link href="#" className="mt-1">
              Contact Us
            </Link>
            <Link href="#" className="mt-1">
              Privacy
            </Link>
            <Link href="#" className="mt-1">
              Terms of Service
            </Link>
          </div>
          <div className="mb-7 flex flex-col lg:mb-0">
            <p className="text-xl font-bold">Properties</p>
            <Link href="#" className="mt-3">
              For Sales
            </Link>
            <Link href="#" className="mt-1">
              For Lease
            </Link>
          </div>
          <div className="mb-7 flex flex-col lg:mb-0">
            <p className="text-xl font-bold">Lending</p>
            <Link href="#" className="mt-3">
              Residential
            </Link>
            <Link href="#" className="mt-1">
              Commercial
            </Link>
          </div>
          <div className="mb-7 flex flex-col lg:mb-0">
            <p className="text-xl font-bold">Social Media</p>
            <div className='mt-3 flex gap-2'>
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="mt-2 text-center">© 2024 Listifies. All rights reserved</p>
    </div>
  )
}

export default Footer
