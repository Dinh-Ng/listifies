import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'

import BlogItem from './blogs/components/blogItem'
import { blogs } from './blogs/page'

export default function Home() {
  return (
    <Layout>
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <section className="col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold">Latest</h2>
            <i className="fas fa-sliders-h text-gray-600"></i>
          </div>
          <div className="mb-4 border p-4">
            <p>Open House</p>
          </div>
          <div className="border p-4">
            <p>Blogs</p>

            {blogs.map((blog, index) => (
              <BlogItem blog={blog} key={index} index={index} />
            ))}
          </div>
        </section>
        <Banner />
      </div>
    </Layout>
  )
}
