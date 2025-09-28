import React from "react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch my-8">
      {/* Hero Image */}
      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500">
        <div className="text-xl">Hero Image / Promotion</div>
      </div>

      {/* Hero CTA */}
      <div className="rounded-lg bg-nexus-blue text-white p-8 h-64 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-serif mb-3">Discover Premium Care</h2>
        <p className="mb-6 text-gray-100">Formulated for all hair types</p>
        <a
          href="#products"
          className="inline-block px-6 py-3 rounded shadow-md font-medium bg-nexus-gold text-nexus-blue hover:opacity-95 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
