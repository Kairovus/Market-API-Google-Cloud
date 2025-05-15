const Products = require("../models/Products.js");

// Get all products
const getAllProducts = (req, res) => {
  Products.getAllProducts((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get product by ID
const getProductById = (req, res) => {
  Products.getProductByproduct_id(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Search product by name
const searchProductByName = (req, res) => {
  Products.searchProductByName(req.params.name, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add new product
const addProduct = (req, res) => {
  Products.addProduct(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ...req.body, id: result.insertId || req.body.id });
  });
};

// Update product
const updateProduct = (req, res) => {
  Products.updateProduct(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(req.body);
  });
};

// Delete product
const deleteProduct = (req, res) => {
  Products.deleteProduct(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product deleted successfully" });
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  searchProductByName,
  addProduct,
  updateProduct,
  deleteProduct,
};
