const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// Get all products
router.get("/", productController.getAllProducts);

// Search product by name
router.get("/search/:name", productController.searchProductByName);

// Get product by ID
router.get("/:id", productController.getProductById);

// Add new product
router.post("/", productController.createProduct);

// Update product
router.put("/", productController.updateProduct);

// Delete product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
