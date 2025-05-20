const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");

// Get all categories
router.get("/", categoryController.getAllCategories);

// Search category by name
router.get("/search/:name", categoryController.searchCategoryByName);

// Add new category
router.post("/", categoryController.createCategory);

// Update category
router.put("/", categoryController.updateCategory);

// Delete category
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
