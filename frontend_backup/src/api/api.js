const BASE = import.meta.env.VITE_API_BASE_URL || "";

export async function fetchProducts({
  page = 1,
  page_size = 12,
  category,
  ordering,
  search,
} = {}) {
  const params = new URLSearchParams();
  params.set("page", page);
  params.set("page_size", page_size);
  if (category) params.set("category", category);
  if (ordering) params.set("ordering", ordering);
  if (search) params.set("search", search);

  const url = `${BASE}/api/products/?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchCategories() {
  const url = `${BASE}/api/categories/`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
