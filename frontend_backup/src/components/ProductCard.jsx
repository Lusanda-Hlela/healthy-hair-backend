import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col">
      {/* Image placeholder */}
      <div className="bg-gray-200 rounded-lg h-36 mb-4 flex items-center justify-center text-sm text-gray-500">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="object-cover w-full h-full rounded-lg"
          />
        ) : (
          "Image"
        )}
      </div>
      <h3 className="font-medium text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mb-3">R {product.price}</p>
      <button className="mt-auto bg-accent text-white px-3 py-2 rounded hover:bg-accent/90">
        Add
      </button>
    </div>
  );
}
