# Project Nexus - Hair Products E-Commerce Backend  

A backend project built with **Django** and **Django REST Framework (DRF)**, featuring JWT authentication, PostgreSQL integration, and API documentation. The product catalog focuses on **hair products**, simulating a real-world e-commerce backend system.  

---

## 🛍️ Project Overview  

This project focuses on developing a robust backend system to support an **e-commerce hair products catalog**.  
The backend handles:  
- Product data management  
- User authentication (JWT)  
- APIs for filtering, sorting, and pagination  
- API documentation via Swagger  

---

## 🎯 Project Goals  
- **CRUD APIs**: Manage products, categories, orders, reviews, and users  
- **Filtering, Sorting, Pagination**: Efficient product discovery  
- **Database Optimization**: High-performance queries with indexing  
- **Authentication**: Secure access via JWT  

---

## 🛠️ Technologies Used  
- **Django** → scalable backend framework  
- **Django REST Framework (DRF)** → API layer  
- **PostgreSQL** → relational database  
- **JWT (SimpleJWT)** → authentication system  
- **Swagger/OpenAPI (drf-yasg)** → API documentation  
- **python-decouple** → environment variable management  

---

## ✨ Key Features  
1. **CRUD Operations**  
   - Products, categories, orders, reviews, and users  
   - JWT-secured authentication  

2. **API Features**  
   - **Filtering & Sorting**: e.g., filter by category, sort by price  
   - **Pagination**: Browse large datasets efficiently  

3. **Authentication**  
   - Secure login with JWT access & refresh tokens  
   - Protected endpoints  

4. **API Documentation**  
   - Interactive Swagger UI and ReDoc  

---

## 🔧 Implementation Process  

### Git Commit Workflow  
- `feat: set up Django project with PostgreSQL`  
- `feat: implement user authentication with JWT`  
- `feat: add product APIs with filtering and pagination`  
- `feat: integrate Swagger documentation for API endpoints`  
- `perf: optimize database queries with indexing`  
- `docs: add API usage instructions in Swagger`  

---

## ✅ Evaluation Criteria  
1. **Functionality**  
   - CRUD APIs for products, categories, orders, reviews, and authentication  
   - Filtering, sorting, pagination  

2. **Code Quality**  
   - Clean, maintainable, well-documented code  
   - Optimized queries with indexing  

3. **User Experience**  
   - Clear, interactive API documentation  
   - Secure JWT authentication  

4. **Version Control**  
   - Frequent, descriptive commits  
   - Organized repo structure  

---

# 🚀 Features  
- User registration & authentication  
- JWT-based login (access & refresh tokens)  
- Protected endpoints  
- PostgreSQL integration  
- Environment management with `.env`  
- API documentation with **Swagger**  

---

# 🛠️ Tech Stack  
- Python 3.11+  
- Django 5.x  
- Django REST Framework  
- Simple JWT  
- PostgreSQL (with psycopg2-binary)  
- drf-yasg (Swagger UI)  
- python-decouple  

---

# 📌 Stages Completed  

## Stage 1: Environment Setup  
- Installed: Python, PostgreSQL (port 5433), VS Code, Git Bash  
- Created Django project `nexus`  
- Configured `.env` with `python-decouple`  
- Ran migrations & verified Django setup  
- Added `.gitignore`  

**Testing:**  
- ✅ `python manage.py migrate`  
- ✅ `python manage.py runserver`  

---

## Stage 2: Database Design + Models  
- Designed ERD for Users, Products, Categories, Orders, Reviews  
- Implemented models in `store/models.py`:  
  - `Category`, `Product`, `ProductCategory`, `ProductImage`, `Review`, `Order`, `OrderItem`  
- Added `store` to `INSTALLED_APPS`  
- Applied migrations  
- Created superuser for Admin  

---

## Stage 3: API Development  
- Integrated DRF  
- Created serializers & ViewSets  
- Configured `DefaultRouter` → `/api/` endpoints  
- Tested with **APITestCase** and Postman  

**Endpoints:**  
- `GET /api/products/` → list products  
- `POST /api/orders/` → create order  
- `POST /api/reviews/` → add review  

---

## Stage 4: Authentication (JWT)  
- Added SimpleJWT  
- Implemented login & refresh  
- Protected routes  

**Endpoints:**  
- `/api/token/` (login)  
- `/api/token/refresh/`  
- `/api/users/` (protected)  

**Testing:**  
- Login returns **access & refresh tokens**  
- Protected endpoints require valid JWT  

---

## Stage 5: API Documentation (Swagger)  
- Installed **drf-yasg**  
- Auto-generated docs available at:  
  - Swagger UI → `http://127.0.0.1:8000/swagger/`  
  - ReDoc → `http://127.0.0.1:8000/redoc/`  

**Features:**  
- Interactive API testing  
- Auto-updates with new endpoints  

---

## Stage 6: Frontend Integration (🚧 Upcoming)  
- Planned **React (Vite)** frontend  
- Features:  
  - Product browsing  
  - JWT-based login  
  - Orders & reviews  

---

# ⚙️ Setup Instructions  

### 1️⃣ Clone the Repository  
```bash
git clone <your-repo-url>
cd alx-project-nexus
