# Project Nexus - Hair Products E-Commerce Backend  

A backend project built with **Django** and **Django REST Framework (DRF)**, featuring JWT authentication, PostgreSQL integration, and API documentation. The product catalog focuses on **hair products**, simulating a real-world e-commerce backend system.  

---

## 🛍️ Project Overview  

This case study focuses on developing a robust backend system to support an **e-commerce hair products catalog**. The backend handles product data management, user authentication, and APIs for filtering, sorting, and pagination, simulating a real-world scenario for backend engineers.  

---

## 🎯 Project Goals  
- **CRUD APIs**: Build APIs for managing products, categories, and user authentication.  
- **Filtering, Sorting, Pagination**: Implement robust logic for efficient product discovery.  
- **Database Optimization**: Design a high-performance database schema to support seamless queries.  

---

## 🛠️ Technologies Used  
- **Django** → scalable backend framework  
- **PostgreSQL** → optimized relational database  
- **JWT** → secure authentication system  
- **Swagger/OpenAPI** → API documentation and testing  

---

## ✨ Key Features  
1. **CRUD Operations**  
   - Full create, read, update, delete for products & categories  
   - JWT-secured user authentication and management  

2. **API Features**  
   - **Filtering & Sorting**: Filter products by category, sort by price  
   - **Pagination**: Efficient navigation of large product datasets  

3. **API Documentation**  
   - Auto-generated with **Swagger**  
   - Interactive API testing and consumption  

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
   - CRUD APIs for products, categories, and user authentication  
   - Filtering, sorting, and pagination implemented  

2. **Code Quality**  
   - Clean, maintainable, and well-documented code  
   - Proper indexing for database optimization  

3. **User Experience**  
   - Clear, interactive API documentation  
   - Secure JWT authentication  

4. **Version Control**  
   - Frequent, descriptive commit messages  
   - Organized repo structure  

---

# 🚀 Features  
- User registration & authentication  
- JWT-based login (access & refresh tokens)  
- Protected API endpoints with token validation  
- PostgreSQL database integration  
- Environment variable management with `python-decouple`  
- API documentation with **Swagger** (`drf-yasg`)  

---

# 🛠️ Tech Stack  
- Python 3.11+  
- Django 5.x  
- Django REST Framework  
- Simple JWT  
- PostgreSQL (with psycopg2-binary)  
- drf-yasg (Swagger UI)  

---

# 📌 Stages Completed  

## Stage 1: Environment Setup  
- Installed tools: Python, PostgreSQL (port 5433), VS Code, Git Bash  
- Created Django project `nexus`  
- Configured PostgreSQL with `.env` file using `python-decouple`  
- Ran initial migrations & verified Django welcome page  
- Added `.gitignore` for sensitive files  

**Testing:**  
- ✅ `python manage.py migrate`  
- ✅ `python manage.py runserver`  

---

## Stage 2: Database Design + Django Models  
- Designed ERD for Users, Products, Categories, Orders, Reviews  
- Implemented models in `store/models.py`:  
  - `Category`, `Product`, `ProductCategory`, `ProductImage`, `Review`, `Order`, `OrderItem`  
- Added `store` to `INSTALLED_APPS`  
- Ran migrations & tested with Django shell  
- Created superuser for Django Admin  

---

## Stage 3: API Development + Testing  
- Integrated **Django REST Framework**  
- Built serializers & ViewSets for CRUD  
- Configured `DefaultRouter` → auto-generated `/api/` endpoints  
- Tested endpoints with **APITestCase** and Postman  

**Example Endpoints:**  
- `GET /api/products/` → product list  
- `POST /api/orders/` → create order  
- `POST /api/reviews/` → add product review  

---

## Stage 4: Authentication (JWT)  
- Added **Simple JWT** for secure login  
- Implemented login, refresh, and protected routes  
- Example endpoints:  
  - `/api/token/` (login)  
  - `/api/token/refresh/`  
  - `/api/users/` (protected)  

**Testing:**  
- Login returns **access & refresh tokens**  
- Protected endpoints require JWT  

---

## Stage 5: API Documentation (Swagger)  
- Installed & configured **drf-yasg**  
- Auto-generated docs available at:  
  - Swagger UI → `http://127.0.0.1:8000/swagger/`  
  - ReDoc → `http://127.0.0.1:8000/redoc/`  

**Features:**  
- Interactive API testing  
- Auto-updates with new endpoints  

---

## Stage 6: Frontend Integration (🚧 Upcoming)  
- Plan to integrate **React (Vite)** frontend with Django backend  
- Features:  
  - Product catalog browsing  
  - User login & JWT handling  
  - Orders & reviews management  

---

# ⚙️ Setup Instructions  

### 1️⃣ Clone the repository  
```bash
git clone <your-repo-url>
cd alx-project-nexus
