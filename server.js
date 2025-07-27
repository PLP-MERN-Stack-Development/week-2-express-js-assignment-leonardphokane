<<<<<<< HEAD
require('dotenv').config(); // Load env variables

const express = require('express');
const app = express();

// Middleware imports
const productRoutes = require('./routes/productRoutes');
const sanitizeRoute = require('./routes/sanitize'); // ✅ NEW import
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const auth = require('./middleware/auth'); // Optional use

// Parse incoming JSON
app.use(express.json());

// 📝 Log all requests
app.use(logger);

// 🔗 Route mounts
app.use('/api/products', productRoutes);
app.use('/api/sanitize', sanitizeRoute); // ✅ NEW route mount

// 🛑 Handle unmatched routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// 🧯 Global error handler
app.use(errorHandler);

// 🚀 Start server
const PORT = process.env.PORT || 5000;
console.log('🚀 App initialized in', process.env.NODE_ENV || 'development', 'mode');
console.log('PORT:', PORT);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
=======
// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());

// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 
>>>>>>> 4fbea19f1cdcb65971aae62b0c9f09c07f600478
