/* eslint-disable @next/next/no-img-element */
import Banner from '@/components/banner'
import Header from '@/components/header'
import Layout from '@/components/layout'
import BlogItem from './components/blogItem'

export default function Blogs() {
  return (
    <Layout>
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <MainContent />
        <Banner />
      </div>
    </Layout>
  )
}

export const blogs = [
  {
    title: 'Beautiful Family House for Rent',
    author: 'John Doe',
    date: '07 - 01 - 2024',
    category: 'Real Estate',
    language: 'English',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    width: 150,
    height: 100,
  },
  {
    title: 'Modern Apartment in the City Center',
    author: 'Jane Smith',
    date: '06 - 20 - 2024',
    category: 'Real Estate',
    language: 'English',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    width: 150,
    height: 100,
  },
  {
    title: 'Cozy Cottage Near the Beach',
    author: 'Alice Johnson',
    date: '06 - 15 - 2024',
    category: 'Real Estate',
    language: 'English',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    width: 150,
    height: 100,
  },
]

const MainContent = () => {
  return (
    <section className="col-span-2">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-bold">Home / Blogs</h2>
        <i className="fas fa-sliders-h text-gray-600"></i>
      </div>
      {blogs.map((blog, index) => (
        <BlogItem blog={blog} key={index} index={index} />
      ))}
    </section>
  )
}
