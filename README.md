# Project Nexus

## Stage 1: Environment Setup ✅

In this stage, we prepared our development environment for building the Django + PostgreSQL API project.

### Key Steps Completed:

1. **Installed Tools**

   - Python 3.11+
   - PostgreSQL (running on port 5433)
   - VS Code (IDE)
   - Git Bash (terminal)
   - Django + Dependencies (via `pip install`)

2. **Created Django Project**

   - Started a new project called `nexus`
   - Verified setup with Django’s default server page

3. **Configured PostgreSQL**

   - Created a database named `nexus_db`
   - Connected Django to PostgreSQL using environment variables stored in a `.env` file

4. **Environment Variables**

   - Used `python-decouple` to load sensitive values
   - Example `.env`:
     ```env
     SECRET_KEY=your-secret-key
     DEBUG=True
     DB_NAME=nexus_db
     DB_USER=postgres
     DB_PASSWORD=yourpassword
     DB_HOST=localhost
     DB_PORT=5433
     ```

5. **Version Control**
   - Initialized Git repository
   - Added `.gitignore` to exclude sensitive files (like `.env` and `__pycache__`)

### Testing Completed:

- ✅ `python manage.py migrate` → ran successfully, created default tables in PostgreSQL
- ✅ `python manage.py runserver` → opened Django welcome page at `http://127.0.0.1:8000`

---

## Stage 2: Database Design + Django Models

### Entity Relationship Diagram (ERD)
We designed the data structure using an ERD that covers the main business entities:
- **Users**: Customers who register and interact with the system.
- **Products & Categories**: Products grouped under categories, with support for multiple images.
- **Orders & Order Items**: Tracks purchases, quantities, and total order pricing.
- **Reviews**: User feedback on products.

📌 Data Flow:
- User → Order → OrderItem → Product (purchase pipeline).
- User → Review → Product (feedback pipeline).
- Category ↔ Product ↔ ProductImage (catalog structure).

### Django Models
The ERD was translated into Django models within the `store` app:
- `Category`, `Product`, `ProductCategory` (many-to-many relationship)
- `ProductImage`
- `Review`
- `Order`, `OrderItem`

### Steps Completed
1. Added `store` to `INSTALLED_APPS`.
2. Defined models in `store/models.py` based on ERD.
3. Ran migrations to create PostgreSQL tables.
4. Verified by inserting sample data using the Django shell.

### Admin Setup (Optional but Recommended)
1. Created a superuser using:
   ```bash
   python manage.py createsuperuser


## Stage 3: API Development + Testing

### Overview
This stage focused on exposing our database models through a RESTful API using Django REST Framework (DRF). These APIs allow frontend applications, mobile clients, or external systems to interact with the backend.

---

### Key Elements
1. **Django REST Framework Setup**
   - Added `rest_framework` to `INSTALLED_APPS`.
   - Created serializers for each model.
   - Built ViewSets for CRUD operations.
   - Configured a `DefaultRouter` to auto-generate REST endpoints.

2. **Endpoints**
   - All APIs are prefixed with `/api/`.
   - Example:
     - `GET /api/categories/`
     - `POST /api/products/`
     - `GET /api/orders/`

3. **Testing**
   - Automated tests created with Django’s `APITestCase`.
   - Manual validation performed using **Postman**:
     - `GET` endpoints return lists of records.
     - `POST` endpoints create new records.
     - `PUT/PATCH/DELETE` allow updates and deletions.

---

### Example API Workflow
- **User browsing products**:  
  `GET /api/products/` → returns product catalog.  

- **Placing an order**:  
  `POST /api/orders/` → creates new order linked to user.  

- **Leaving a review**:  
  `POST /api/reviews/` → adds feedback tied to product and user.  

---

### Example JSON Response
```json
{
  "id": 1,
  "name": "Electronics",
  "description": "Devices and gadgets"
}

# 🔐 Stage 3 — Authentication (JWT)

This stage introduces **secure user authentication** to the API using **JWT (JSON Web Tokens)** powered by [Django REST Framework SimpleJWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/).

---

## ✅ Features
- Secure login with **JWT access & refresh tokens**
- Token refresh endpoint for session renewal
- Protected route `/api/users/` accessible only with a valid JWT
- Centralized authentication middleware using DRF + SimpleJWT

---

## ⚙️ Setup

### 1. Install dependencies
```bash
pip install djangorestframework-simplejwt
