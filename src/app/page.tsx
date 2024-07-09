import Header from '@/components/Header'
import Layout from '@/components/layout'

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
          </div>
        </section>
        <aside>
          <h2 className="mb-2 text-lg font-bold">Banners</h2>
          <div className="mb-4 border p-4">
            <p>1% Down & 2% Grant</p>
            <a href="#" className="font-bold text-blue-500">
              Learn More
            </a>
          </div>
          <div className="mb-4 border p-4">
            <p>$7,500 Grant</p>
            <a href="#" className="font-bold text-blue-500">
              Learn More
            </a>
          </div>
          <div className="border p-4">
            <p>Loan Officer Info Card</p>
            <a href="#" className="font-bold text-blue-500">
              Contact Now
            </a>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
