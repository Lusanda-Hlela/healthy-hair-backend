import React, { useRef, useEffect } from "react";

// Import images from src/assets
import shampooImg from "../assets/category-shampoos.jpg";
import conditionerImg from "../assets/category-conditioners.jpg";
import stylingImg from "../assets/category-styling.jpg";
import treatmentImg from "../assets/category-treatment.jpg";
import kitsImg from "../assets/category-kits.jpg";
import scalpImg from "../assets/category-scalp.jpg";
import serumsImg from "../assets/category-serums.jpg";
import toolsImg from "../assets/category-tools.jpg";

const categories = [
  { id: 1, name: "Shampoos", img: shampooImg },
  { id: 2, name: "Conditioners", img: conditionerImg },
  { id: 3, name: "Styling", img: stylingImg },
  { id: 4, name: "Treatment", img: treatmentImg },
  { id: 5, name: "Kits", img: kitsImg },
  { id: 6, name: "Scalp Care", img: scalpImg },
  { id: 7, name: "Serums", img: serumsImg },
  { id: 8, name: "Tools", img: toolsImg },
];

export default function FeaturedCategories() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let interval = setInterval(() => {
      // scroll by one item width
      const firstItem = el.querySelector(".cat-item");
      if (!firstItem) return;
      const gap = 16;
      const move = firstItem.offsetWidth + gap;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: move, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-10">
      <h3 className="text-xl font-semibold mb-4">Featured Categories</h3>
      <div
        ref={ref}
        className="flex gap-4 overflow-hidden snap-x snap-mandatory"
      >
        {categories.map((cat) => (
          <div key={cat.id} className="cat-item flex-shrink-0 w-44 snap-start">
            <div className="rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-28 object-cover"
              />
              <div className="p-2 text-sm text-center">{cat.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
