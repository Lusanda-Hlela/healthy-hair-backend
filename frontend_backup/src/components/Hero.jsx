import React from "react";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <div className="lg:col-span-2 rounded-lg bg-green-50 h-48 md:h-64 flex items-center justify-center">
        <div className="text-gray-600">Hero Image / Promotion</div>
      </div>

      <aside className="rounded-lg bg-brand text-white p-6 flex flex-col justify-center">
        <h4 className="text-xl font-semibold mb-2">Discover Premium Care</h4>
        <p className="text-sm opacity-90 mb-4">Formulated for all hair types</p>
        <button className="self-start px-4 py-2 bg-accent text-white rounded">
          Shop Now
        </button>
      </aside>
    </div>
  );
}
