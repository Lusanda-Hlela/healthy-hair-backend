import React from "react";

export default function CategoryCard({ category }) {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 rounded-xl h-28 flex items-center justify-center shadow-sm cursor-pointer transition">
      <span className="text-lg font-medium">{category.name}</span>
    </div>
  );
}
