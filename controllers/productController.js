// controllers/productController.js

const products = require('../data/products.json');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
};

// @desc    Create new product
// @route   POST /api/products
// @access  Private
const createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
