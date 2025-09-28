import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/FeaturedCategories";
import ProductGrid from "./components/ProductGrid";
import Testimonials from "./components/Testimonials";
import PartnersStrip from "./components/PartnersStrip";
import Footer from "./components/Footer";
import PLP from "./pages/PLP";
import Cart from "./pages/Cart";

function Home() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-6 py-10 border-4 border-red-500">
      <Hero />
      <FeaturedCategories />
      <ProductGrid />
      <Testimonials />
      <PartnersStrip />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/page/:pageNumber" element={<PLP />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
