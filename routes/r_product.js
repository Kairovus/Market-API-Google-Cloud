const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// Get all products
router.get("/", productController.getAllProducts);
// Get product by ID
router.get("/:id", productController.getProductById);
// Search product by name
router.get("/search/:name", productController.searchProductByName);
// Add new product
router.post("/", productController.addProduct);
// Update product
router.put("/", productController.updateProduct);
// Delete product
router.delete("/:id", productController.deleteProduct); 
module.exports = router;
