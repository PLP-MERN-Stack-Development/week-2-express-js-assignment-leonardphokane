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
