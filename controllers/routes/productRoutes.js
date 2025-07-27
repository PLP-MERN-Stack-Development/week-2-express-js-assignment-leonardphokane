const express = require('express');
const router = express.Router();

// Controllers
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// Middleware
const verifyJWT = require('../middleware/verifyJWT');

// Public Routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Protected Routes
router.post('/', verifyJWT, createProduct);
router.put('/:id', verifyJWT, updateProduct);

// Admin-only Route: Delete product
router.delete('/:id', verifyJWT, (req, res, next) => {
  if (!req.user.admin) {
    return res.status(403).json({ error: 'Access denied. Admins only.' });
  }
  next();
}, deleteProduct);

module.exports = router;
