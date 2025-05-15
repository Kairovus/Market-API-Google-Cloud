const Customer = require("../models/Customer.js");

// Get all customers
const getAllCustomers = (req, res) => {
  Customer.getAllCustomers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get customer by ID
const getCustomerById = (req, res) => {
  Customer.getCustomerBycustomer_id(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Search customer by name
const searchCustomerByName = (req, res) => {
  Customer.searchCustomerByName(req.params.name, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add new customer
const addCustomer = (req, res) => {
  Customer.addCustomer(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ...req.body, id: result.insertId || req.body.id });
  });
};

// Update customer
const updateCustomer = (req, res) => {
  Customer.updateCustomer(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(req.body);
  });
};

// Delete customer
const deleteCustomer = (req, res) => {
  Customer.deleteCustomer(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Customer deleted successfully" });
  });
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  searchCustomerByName,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
