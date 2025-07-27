📦 Week 2 – Express.js RESTful API (Products)
# Express.js RESTful API – Products Resource

![Node.js](https://img.shields.io/badge/Node.js-v18+-2f3542?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-1e90ff?style=for-the-badge&logo=express&logoColor=white)
![JWT Auth](https://img.shields.io/badge/JWT-Authentication-f39c12?style=for-the-badge&logo=jsonwebtokens&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-27ae60?style=for-the-badge&logo=mongodb&logoColor=white)
![Postman](https://img.shields.io/badge/Tested%20with-Postman-d35400?style=for-the-badge&logo=postman&logoColor=white)
![GitHub Classroom](https://img.shields.io/badge/GitHub-Classroom-6c5ce7?style=for-the-badge&logo=github&logoColor=white)


This project is part of the PLP MERN Stack certification, focusing on building a RESTful API using Express.js. It implements full CRUD functionality for a product resource, secure access via JWT, modular middleware, error handling, and advanced features like filtering and pagination.

🚀 Getting Started
Requirements
Node.js v18+

npm or yarn

Postman, Insomnia, or curl for testing

Installation
bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-leonardphokane.git
cd week-2-express-js-assignment-leonardphokane
npm install
Run the Server
bash
npm start
Create a .env file:

PORT=5000
JWT_SECRET=yourSecretKey
🔐 Authentication
Add JWT to request headers:

Authorization: Bearer <your-token>
JWT is required for POST, PUT, and DELETE. Only users with "admin": true claim can delete products.

📌 API Endpoints
Method	Route	Protection	Description
GET	/api/products	Public	Retrieve all products
GET	/api/products/:id	Public	Get product by ID
POST	/api/products	JWT	Create new product
PUT	/api/products/:id	JWT	Update existing product
DELETE	/api/products/:id	JWT + Admin	Delete product (admin only)
Supports:

Filtering: ?category=Tech

Pagination: ?page=2&limit=10

Search: ?name=Router

🧪 Sample Request (curl)
bash
curl -X POST http://localhost:5000/api/products \
-H "Authorization: Bearer <your-token>" \
-H "Content-Type: application/json" \
-d '{
  "name": "Zulutech Router",
  "price": 1299.99,
  "category": "Networking"
}'
🛠 Project Structure
├── controllers/
│   └── productController.js
├── middleware/
│   ├── verifyJWT.js
│   └── errorHandler.js
├── routes/
│   └── productRoutes.js
├── server.js
├── .env.example
├── README.md
└── Week2-Assignment.md
📚 Technologies Used
Express.js

JWT for auth

Modular middleware

RESTful routing

Error handling

Query parsing

👨🏾‍💻 Developer
Built by Leonard Phokane Meticulous backend engineer @ Zulutech — scaling African-inspired APIs with precision and cultural storytelling.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
