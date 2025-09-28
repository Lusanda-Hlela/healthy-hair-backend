import React from "react";

const items = [
  {
    id: 1,
    stars: 5,
    quote:
      "My hair has never felt so soft! The Hydrating Shampoo is a game changer.",
    name: "Sarah J.",
  },
  {
    id: 2,
    stars: 5,
    quote: "Adds shine without weighing hair down. Love the results.",
    name: "Mark T.",
  },
  {
    id: 3,
    stars: 5,
    quote: "The conditioner smells amazing and restores my hair texture.",
    name: "Emily R.",
  },
];

export default function Testimonials() {
  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold mb-6">What Our Customers Say</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((t) => (
          <div key={t.id} className="p-4 bg-white rounded shadow-sm">
            <div className="text-yellow-500 mb-3">{"★".repeat(t.stars)}</div>
            <p className="text-sm mb-3">{t.quote}</p>
            <div className="text-xs font-medium text-gray-600">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
