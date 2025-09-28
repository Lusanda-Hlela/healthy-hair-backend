import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchProducts, fetchCategories } from "../api/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const prodData = await fetchProducts({ page: 1, page_size: 8 });
        const catData = await fetchCategories();
        if (!mounted) return;
        setProducts(prodData.results || prodData || []);
        setCategories(catData || []);
      } catch (err) {
        console.warn("API fetch failed, fallback demo data", err);
        if (!mounted) return;
        setProducts(
          [...Array(6)].map((_, i) => ({
            id: i + 1,
            name: `Product ${i + 1}`,
            price: (49 + i * 10).toFixed(2),
            image_url: "https://via.placeholder.com/300x200?text=Product",
          }))
        );
        setCategories([
          { id: 1, name: "Shampoos" },
          { id: 2, name: "Conditioners" },
          { id: 3, name: "Styling" },
        ]);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src="https://via.placeholder.com/600x400?text=Hero+Image"
          alt="Hero"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Discover Premium Haircare</h1>
          <p className="text-lg text-gray-600">
            Shop the latest shampoos, conditioners, and styling products
            designed to keep your hair looking amazing.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-100 rounded-xl shadow-md p-6 flex items-center justify-center text-lg font-medium hover:shadow-lg transition"
            >
              {cat.name}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  src={prod.image_url}
                  alt={prod.name}
                  className="rounded-md mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-medium text-gray-900">{prod.name}</h3>
                <p className="text-gray-600">${prod.price}</p>
                <button className="mt-3 w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
