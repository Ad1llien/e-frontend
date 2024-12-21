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
   git clone https://github.com/Ad1llien/e-store.git
   cd  backend

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
Frontend: http://localhost:5173
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
![image](https://github.com/user-attachments/assets/4bc7903a-090e-4b93-b1a2-65532b25adf1)
![image](https://github.com/user-attachments/assets/fc032ee1-074c-4531-8d82-ab94cbf04380)

![image](https://github.com/user-attachments/assets/6662651d-a25a-4219-aeb8-f52210b7b71e)
![image](https://github.com/user-attachments/assets/23985c1d-236d-43bb-b4ff-1a7f9a4bbdb8)
![image](https://github.com/user-attachments/assets/f3c186c1-40a0-45c1-ab59-11ee980d6e84)
![image](https://github.com/user-attachments/assets/d0bb36b8-1592-4631-85fa-a131174a1b5b)
![image](https://github.com/user-attachments/assets/bb76e485-72f6-44af-a325-3772d8148138)
![image](https://github.com/user-attachments/assets/483997c5-e2b4-426f-9ffa-f23fcd9b9fa8)
![image](https://github.com/user-attachments/assets/b06d1687-65aa-47bd-868d-dbe7b3bfc311)
![image](https://github.com/user-attachments/assets/8f304b8d-6314-48d7-ad8a-65aff1fd42ea)



Contributors
Akadil Zhengissuly  - Backend Developer 
Sezim Satlyk-klych - Frontend Developer 
Artykbay Altynay - Frontend Developer 
Akbura Aruzhan - Frontend Developer 
Gaini Kinayat - Frontend Developer 





