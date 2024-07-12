'use client'

import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="mb-4 flex items-center justify-between">
      <div className="flex items-center">
        <a href="/">
          <h1 className="mr-4 text-4xl font-bold">Listifies</h1>
        </a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full border px-4 py-2"
          />
          <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
        </div>
      </div>
      <nav className="flex items-center space-x-6">
        <a
          href="/"
          className={`text-gray-600 ${pathname === '/' ? 'font-bold' : ''}`}
        >
          Home
        </a>
        <a
          href="/blogs"
          className={`text-gray-600 ${pathname === '/blogs' ? 'font-bold' : ''}`}
        >
          Blogs
        </a>
        <a
          href="#"
          className={`text-gray-600 ${pathname === '/listings' ? 'font-bold' : ''}`}
        >
          Listings <i className="fas fa-caret-down"></i>
        </a>
        <i className="fas fa-user-circle text-2xl text-gray-600"></i>
      </nav>
    </header>
  )
}

export default Header
