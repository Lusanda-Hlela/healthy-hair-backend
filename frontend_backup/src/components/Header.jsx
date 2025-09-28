import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-[72px] flex items-center">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-brand">NexusShop</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-brand">Shampoos</a>
            <a href="#" className="hover:text-brand">Conditioners</a>
            <a href="#" className="hover:text-brand">Styling</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <input
            aria-label="Search products"
            className="hidden md:inline-block border rounded px-3 py-2 text-sm w-72"
            placeholder='Search products, e.g., \"shampoo\"'
          />
          <button className="px-3 py-2 text-sm border rounded">Login</button>
          <button className="px-3 py-2 text-sm bg-accent text-white rounded">Cart</button>
        </div>
      </div>
    </header>
  )
}
