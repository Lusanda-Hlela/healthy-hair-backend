// (temporary test) src/components/ProductGrid.debug.jsx
import React from "react";
import { productsData } from "../data/products"; // or use same placeholder items
import ProductCard from "./ProductCard";

export default function ProductGridDebug() {
  return (
    <section id="products" className="my-12">
      <h3 className="text-xl font-semibold mb-4">Popular Right Now</h3>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="grid grid-cols-4 gap-4">
          {productsData.slice(0, 12).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
