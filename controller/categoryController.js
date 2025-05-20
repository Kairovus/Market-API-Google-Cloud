const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();
    res.json(categories);
  } catch (error) {
    console.error("Error in getAllCategories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.searchCategoryByName = async (req, res) => {
  try {
    const categories = await Category.searchByName(req.query.name);
    res.json(categories);
  } catch (error) {
    console.error("Error in searchCategoryByName:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const categoryId = await Category.create(req.body);
    res
      .status(201)
      .json({ id: categoryId, message: "Category created successfully" });
  } catch (error) {
    console.error("Error in createCategory:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const success = await Category.update(req.params.id, req.body);
    if (!success) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category updated successfully" });
  } catch (error) {
    console.error("Error in updateCategory:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const success = await Category.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error in deleteCategory:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
