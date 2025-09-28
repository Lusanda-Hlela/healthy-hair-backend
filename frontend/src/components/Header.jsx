// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-6">
          <div>
            <Link to="/" className="text-lg font-bold text-nexus-blue">
              ✦ NexusShop
            </Link>
          </div>

          <nav className="hidden md:flex gap-4 text-sm">
            <NavLink
              to="/shampoos"
              className="text-gray-700 hover:text-nexus-blue"
            >
              Shampoos
            </NavLink>
            <NavLink
              to="/conditioners"
              className="text-gray-700 hover:text-nexus-blue"
            >
              Conditioners
            </NavLink>
            <NavLink
              to="/styling"
              className="text-gray-700 hover:text-nexus-blue"
            >
              Styling
            </NavLink>
            <NavLink
              to="/products/page/1"
              className="text-gray-700 hover:text-nexus-blue"
            >
              All Products
            </NavLink>
          </nav>
        </div>

        {/* Right: Search + Cart + Auth */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <input
              className="border rounded px-3 py-2 w-72 text-sm focus:outline-none focus:ring"
              placeholder="Search products, e.g., shampoo"
            />
          </div>

          {/* Cart Button */}
          <Link to="/cart" className="relative p-2 rounded hover:bg-gray-100">
            <FaShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-nexus-blue text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/login" className="text-sm text-gray-700 hover:underline">
            Login / Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
