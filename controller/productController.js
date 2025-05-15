const express = require('express');
const router = express.Router();
const Products = require('../models/Products.js');

// Get all products
router.get('/', (req, res) => {
    Products.getAllProducts((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get product by ID
router.get('/:id', (req, res) => {
    Products.getProductById(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Search product by name
router.get('/search/:name', (req, res) => {
    Products.searchProductByName(req.params.name, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Add new product
router.post('/', (req, res) => {
    Products.addProduct(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ ...req.body, id: result.insertId || req.body.id });
    });
});

// Update product
router.put('/', (req, res) => {
    Products.updateProduct(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(req.body);
    });
});

// Delete product
router.delete('/:id', (req, res) => {
    Products.deleteProduct(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Product deleted successfully' });
    });
});

module.exports = router;