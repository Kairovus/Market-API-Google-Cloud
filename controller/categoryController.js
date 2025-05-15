const Categories = require("../models/Category.js");

// Get all categories
const getAllCategory = (req, res) => {
  Categories.getAllCategory((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Search category by name
const searchCategoryByName = (req, res) => {
  Categories.searchCategoryByName(req.params.name, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add new category
const addCategory = (req, res) => {
  Categories.addCategory(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ...req.body, id: result.insertId || req.body.id });
  });
};

// Update category
const updateCategory = (req, res) => {
  Categories.updateCategory(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(req.body);
  });
};

// Delete category
const deleteCategory = (req, res) => {
  Categories.deleteCategory(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Category deleted successfully" });
  });
};

module.exports = {
  getAllCategory,
  searchCategoryByName,
  addCategory,
  updateCategory,
  deleteCategory,
};
