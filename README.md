# Project Nexus - Django REST API

A backend project built with **Django** and **Django REST Framework (DRF)**, featuring JWT authentication, PostgreSQL integration, and API documentation.  

---

## 🚀 Features
- User registration & authentication  
- JWT-based login (access & refresh tokens)  
- Protected API endpoints with token validation  
- PostgreSQL database integration  
- Environment variable management with `python-decouple`  
- API documentation with **Swagger** (`drf-yasg`)  

---

## 🛠️ Tech Stack
- Python 3.11+  
- Django 5.x  
- Django REST Framework  
- Simple JWT  
- PostgreSQL (with psycopg2-binary)  
- drf-yasg (Swagger UI)  

---

# ✅ Stages Completed

## Stage 1: Environment Setup
1. Installed tools: Python, PostgreSQL (port 5433), VS Code, Git Bash.  
2. Created Django project `nexus`.  
3. Configured PostgreSQL with `.env` file using `python-decouple`.  
4. Ran initial migrations & verified Django welcome page.  
5. Added `.gitignore` for sensitive files.  

**Testing:**  
- ✅ `python manage.py migrate`  
- ✅ `python manage.py runserver`  

---

## Stage 2: Database Design + Django Models
- Designed ERD covering Users, Products, Categories, Orders, Order Items, Reviews.  
- Implemented models in `store/models.py`:  
  - `Category`, `Product`, `ProductCategory`, `ProductImage`, `Review`, `Order`, `OrderItem`  
- Added `store` to `INSTALLED_APPS`.  
- Ran migrations & tested with Django shell.  
- Superuser created for Django Admin.  

---

## Stage 3: API Development + Testing
- Integrated **Django REST Framework**.  
- Built serializers & ViewSets for CRUD.  
- Configured `DefaultRouter` → auto-generated `/api/` endpoints.  
- Tested endpoints with **APITestCase** and Postman.  

**Example Endpoints:**  
- `GET /api/products/` → product list  
- `POST /api/orders/` → create new order  
- `POST /api/reviews/` → leave feedback  

---

## Stage 4: Authentication (JWT)
- Added **Simple JWT** for secure authentication.  
- Implemented login, refresh, and protected routes.  
- Example: `/api/token/` (login), `/api/token/refresh/`, `/api/users/` (protected).  

**Testing:**  
- Login with credentials returns **access & refresh tokens**.  
- Protected endpoints accessible only with valid JWT.  

---

## Stage 5: API Documentation (Swagger)
- Installed and configured **drf-yasg**.  
- Auto-generated API documentation available at:  
  - Swagger UI → `http://127.0.0.1:8000/swagger/`  
  - ReDoc → `http://127.0.0.1:8000/redoc/`  

**Features:**  
- Interactive API testing from browser.  
- Auto-updates with new endpoints.  

---

## Stage 6: Frontend Integration (🚧 Upcoming)
- This stage will focus on connecting the Django backend to a **React frontend**.  
- Planned features:  
  - React app using **Vite**  
  - API consumption with **Axios**  
  - JWT token storage & automatic refresh  
  - UI for login, product browsing, ordering, and reviews  

---

# ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd alx-project-nexus
