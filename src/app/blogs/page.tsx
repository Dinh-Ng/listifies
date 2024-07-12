/* eslint-disable @next/next/no-img-element */
import { blogs } from '@/asset/data/fakeData'

import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'

import BlogItem from './components/blogItem'

export default function Blogs() {
  return (
    <Layout>
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <section className="col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold">Home / Blogs</h2>
            <i className="fas fa-sliders-h text-gray-600"></i>
          </div>
          {blogs.map((blog, index) => (
            <BlogItem blog={blog} key={index} index={index} />
          ))}
        </section>
        <Banner />
      </div>
    </Layout>
  )
}
