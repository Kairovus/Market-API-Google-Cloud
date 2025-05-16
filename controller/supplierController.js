const Supplier = require("../models/Supplier.js");

// Get all suppliers
const getAllSuppliers = (req, res) => {
  Supplier.getAllSuppliers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get supplier by ID
const getSupplierById = (req, res) => {
  Supplier.getSupplierBySupplier_id(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Search supplier by name
const searchSupplierByName = (req, res) => {
  Supplier.searchSupplierByName(req.params.name, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add new supplier
const addSupplier = (req, res) => {
  Supplier.addSupplier(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ...req.body, id: result.insertId || req.body.id });
  });
};

// Update supplier
const updateSupplier = (req, res) => {
  Supplier.updateSupplier(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(req.body);
  });
};

// Delete supplier
const deleteSupplier = (req, res) => {
  Supplier.deleteSupplier(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Supplier deleted successfully" });
  });
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  searchSupplierByName,
  addSupplier,
  updateSupplier,
  deleteSupplier,
};
