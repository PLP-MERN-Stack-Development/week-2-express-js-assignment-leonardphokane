<<<<<<< HEAD
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
=======
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19976363&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 
>>>>>>> 4fbea19f1cdcb65971aae62b0c9f09c07f600478
