// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import ProductGrid from "../components/ProductGrid";
import Testimonials from "../components/Testimonials";
import PartnersStrip from "../components/PartnersStrip";

export default function Home() {
  return (
    // Standardized container (same as PLP)
    <main className="flex-1 container mx-auto px-6 py-10">
      <Hero />
      <FeaturedCategories />
      <ProductGrid />
      <Testimonials />
      <PartnersStrip />
    </main>
  );
}
