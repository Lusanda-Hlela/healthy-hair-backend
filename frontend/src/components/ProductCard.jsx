import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    // possible: call backend API /api/cart/ here
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="border rounded-lg p-3 flex flex-col items-start">
      <div className="w-full h-36 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
          onError={(e) =>
            (e.currentTarget.src = "/assets/product-placeholder.jpg")
          }
        />
      </div>
      <div className="mt-3 w-full">
        <h4 className="text-sm font-medium">{product.name}</h4>
        <div className="text-sm text-gray-600 mt-1">
          R {product.price.toFixed(2)}
        </div>
        <button
          onClick={handleAdd}
          className={`mt-3 px-4 py-2 rounded text-white text-sm ${
            added ? "bg-green-600" : "bg-nexus-green hover:opacity-90"
          } transition`}
        >
          {added ? "✓ Added" : "Add"}
        </button>
      </div>
    </div>
  );
}
