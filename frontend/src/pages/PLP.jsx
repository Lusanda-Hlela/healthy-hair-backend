// src/pages/PLP.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// 64 placeholder products (you can replace with API data later)
const allProducts = Array.from({ length: 64 }, (_, i) => ({
  id: i + 1,
  name: `Luxury Product ${i + 1}`,
  price: (50 + Math.floor(Math.random() * 150)).toFixed(2),
  // larger placeholder so images look ok
  image: `https://via.placeholder.com/600x400.png?text=Product+${i + 1}`,
}));

export default function PLP() {
  const { pageNumber } = useParams();
  const currentPage = parseInt(pageNumber, 10) || 1;
  const perPage = 16;

  // cart context (make sure src/context/CartContext.jsx exports useCart)
  const { cart = [], addToCart } = useCart();

  const startIndex = (currentPage - 1) * perPage;
  const products = allProducts.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(allProducts.length / perPage);

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
      <section id="products" className="my-12">
        {/* Title & Breadcrumb */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
            <p className="text-sm text-gray-500 mt-1">Home / All Products</p>
          </div>

          {/* Sort control (kept on the right like mockup) */}
          <div>
            <select className="border px-3 py-2 rounded text-sm">
              <option>Sort by: Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Filters row (keeps layout consistent) */}
        <div className="flex items-center justify-between mb-6">
          <button className="border px-4 py-2 rounded text-sm hover:bg-gray-50">
            Filter
          </button>
          {/* This area is intentionally empty because sort is above; keep for spacing */}
        </div>

        {/* Product Grid */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-100"
              >
                <div className="w-full bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-md font-medium text-gray-800 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4">R {product.price}</p>

                  {/* Add / Added behavior */}
                  {isInCart(product.id) ? (
                    <button
                      disabled
                      className="mt-auto px-4 py-2 bg-gray-200 text-gray-700 rounded"
                    >
                      Added
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-auto px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
                    >
                      Add
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {currentPage > 1 && (
            <Link
              to={`/products/page/${currentPage - 1}`}
              className="px-4 py-2 rounded bg-yellow-400 text-slate-800 font-medium hover:opacity-90"
            >
              ← Prev
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i}
              to={`/products/page/${i + 1}`}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1
                  ? "bg-slate-800 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link
              to={`/products/page/${currentPage + 1}`}
              className="px-4 py-2 rounded bg-yellow-400 text-slate-800 font-medium hover:opacity-90"
            >
              Next →
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
