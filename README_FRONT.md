# Multivendor E-Commerce Platform Store Buy

## Description
Store Buy is a feature-rich, scalable web application designed for vendors to sell products and buyers to shop with ease. Built using Django for the backend and ReactJS for the frontend, the platform includes advanced functionalities such as vendor management, secure payments, real-time notifications, and a responsive design. It is inspired by industry leaders like Amazon and Etsy.

---

## Tech Stack
- Backend Framework: Django
- Frontend Framework: ReactJS
- State Management: Zustand
- HTTP Requests: Axios
- Admin UI: Jazzmin
- Authentication: JSON Web Tokens (JWT)
- API: Token API for user authentication and management
- Package Manager: Yarn
- Styling: Bootstrap
- Languages: Python (Backend), JavaScript (Frontend)

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Ad1llien/e-frontend.git
   cd frontend

Set up the backend:
 cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Set up the frontend:
 cd ../frontend
yarn install
yarn start


Access the application:
Frontend: http://localhost:3000
Backend: http://localhost:8000

API Documentation
Authentication
POST /api/auth/login/
Parameters: { "username": "string", "password": "string" }
Response: { "token": "JWT_TOKEN" }
Products
GET /api/products/
Response: List of all products.
POST /api/products/
Parameters: { "name": "string", "price": "float", "vendor_id": "int" }
Response: Created product.
Orders
POST /api/orders/
Parameters: { "product_id": "int", "quantity": "int" }
Response: Order confirmation.



Features
Vendor registration, product management, and personalized dashboards.
Advanced search, filtering, and sorting for buyers.
Secure payment integration with PayPal and Stripe.
Real-time notifications and email updates.
Fully responsive design using Bootstrap.
SEO optimization for enhanced visibility.

Screenshots



Contributors
Akadil Zhengissuly  - Backend Developer 
Sezim Satlyk-klych - Frontend Developer 
Artykbay Altynay - Frontend Developer 
Akbura Aruzhan - Frontend Developer 
Gaini Kinayat - Frontend Developer 


