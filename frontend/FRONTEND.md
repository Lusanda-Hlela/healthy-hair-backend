# 🎨 Frontend Requirements – Project Nexus (Hair Products E-Commerce)

The frontend will be a **modern, responsive React (Vite)** application styled with **TailwindCSS**, designed for both desktop and mobile. The theme reflects a **premium hair products brand**, combining elegance, performance, and smooth animations. All data will be consumed via the Django REST API backend.

---

## 1️⃣ Global Requirements

- **Responsive design**: Works seamlessly on desktop, tablet, and mobile.  
- **Animations**: Smooth transitions for page loads, hover effects, and sliding carousels.  
- **Theme**: Clean, modern styling with brand-consistent typography & color palette.  
- **API Integration**: Products, categories, auth, cart all come from Django APIs.  
- **JWT Handling**: Store tokens in local storage/cookies, auto-refresh when needed.  
- **Error Handling**: Friendly messages (invalid login, out-of-stock, etc.).  
- **Loading States**: Skeleton loaders or spinners during API calls.  

---

## 2️⃣ Navigation & Layout

### Header (Global)
- Logo (clickable → home).  
- Navigation links: `Home`, `Shop`, `Categories` (dropdown), `Cart`, `Login/Register/Profile`.  
- Search bar with API-powered suggestions (`/api/products?search=`).  
- Sticky header on scroll.  

### Footer (Global)
- Quick links: About Us, Contact, FAQ, Privacy Policy.  
- Social media icons with hover animations.  
- Newsletter subscription form.  

---

## 3️⃣ Homepage

- **Hero Section**:  
  - Full-width carousel with premium hair product banners.  
  - Animated overlays (“Discover Your Perfect Hair Care”).  

- **Featured Products**:  
  - Grid of 4–6 products via `/api/products?featured=true`.  
  - Hover → zoom + “Quick Add to Cart”.  

- **Category Highlights**:  
  - Shampoo, Conditioner, Oils, Styling, etc.  
  - Clicking → category-specific PLP.  

- **Promotions/Deals**:  
  - Horizontal carousel of discount items.  

---

## 4️⃣ Product Listing Page (PLP)

- Product grid (3–4 columns desktop, 2 mobile).  
- Filtering: category, price range, brand.  
- Sorting: price (low→high, high→low), newest, best-selling.  
- Pagination (next/prev or infinite scroll).  

**Product Card**  
- Image, title, price, rating.  
- Hover → zoom + “View Details” button.  

---

## 5️⃣ Product Detail Page (PDP)

- **Product Info**: Gallery, title, description, category, price, stock.  
- **Actions**: Quantity selector + Add to Cart + Buy Now.  
- **Reviews**: Display via `/api/reviews/`, logged-in users can add reviews.  
- **Related Products**: Carousel/grid by category.  

---

## 6️⃣ Authentication

- **Login Page**  
  - Email/username + password → `/api/token/`  
  - Redirect to Home/Profile on success.  

- **Register Page**  
  - Name, email, password, confirm → `/api/users/`  
  - Auto-login after registration.  

- **Profile Page (Protected)**  
  - User info + order history (`/api/orders/`).  
  - Logout button.  

---

## 7️⃣ Cart

- Show products (image, title, price, quantity).  
- Subtotal, tax, total calculated dynamically.  
- “Update Cart” + “Proceed to Checkout”.  

---

## 8️⃣ Checkout (⚡ Backend Extension Required)

- **Shipping Info Page**: Name, Address, City, Zip, Phone.  
- **Payment Page**:  
  - Phase 1: Cash on Delivery or Dummy Stripe integration.  
  - Confirm Order → `POST /api/orders/`.  
- **Order Confirmation**: Summary + success message + link to Profile → Orders.  

---

## 9️⃣ Styling & Animations

- **Framework**: TailwindCSS (or Styled Components).  
- **Animations**:  
  - Page fade-in.  
  - Carousels auto-slide.  
  - Product hover zoom.  
  - Button hover ripple/glow effect.  
- **Consistency**: Fonts, spacing, padding applied across app.  

---

## 🔟 Bonus Features (Optional)

- **Wishlist**: Save favorites (requires backend extension).  
- **Search Results Page**: Dedicated product grid for `/api/products?search=`.  
- **Dark Mode Toggle**: Stylish light/dark switch.  
- **Push Notifications**: Stock updates, order status.  

---

## 📌 Tech Stack (Frontend)

- **React (Vite)** → lightning-fast dev/build.  
- **TailwindCSS** → utility-first styling.  
- **Axios / Fetch** → API integration.  
- **React Router** → navigation.  
- **Framer Motion** → animations.  
- **JWT Auth** → token-based login & session.  

---

## 🔧 Development Plan

1. **Bootstrap project** with Vite + TailwindCSS.  
2. **Implement Global Layout** (Header, Footer, Router).  
3. **Build Homepage** with Hero + Featured Products.  
4. **Develop Shop Pages** (PLP, PDP, Filters).  
5. **Integrate Auth** with Django JWT backend.  
6. **Cart & Checkout Flow**.  
7. **Add Styling, Animations, and Swagger-based API docs links**.  

---

