import React from "react";

const partners = [1, 2, 3, 4, 5];

export default function PartnersStrip() {
  return (
    <section className="my-10">
      <div className="bg-white rounded-lg py-8 px-6 shadow-sm">
        <h4 className="text-center text-gray-600 mb-4">Our Trusted Partners</h4>
        <div className="flex items-center justify-center gap-8">
          {partners.map((p) => (
            <div
              key={p}
              className="w-24 h-8 bg-gray-100 flex items-center justify-center rounded filter grayscale"
            >
              Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
