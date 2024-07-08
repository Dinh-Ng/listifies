const Header = () => {
  return (
    <header className="mb-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="mr-4 text-xl font-bold">Listifies</h1>
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
        <a href="/" className="font-bold text-black">
          Home
        </a>
        <a href="/blogs" className="text-gray-600">
          Blogs
        </a>
        <a href="#" className="text-gray-600">
          Listings <i className="fas fa-caret-down"></i>
        </a>
        <i className="fas fa-user-circle text-2xl text-gray-600"></i>
      </nav>
    </header>
  )
}

export default Header
