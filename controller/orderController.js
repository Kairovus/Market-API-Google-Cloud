const Order = require("../models/Order.js");

// Get all orders
const getAllOrders = (req, res) => {
  Order.getAllOrders((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get order by ID
const getOrderById = (req, res) => {
  Order.getOrderByorder_id(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add new order
const addOrder = (req, res) => {
  Order.addOrder(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ...req.body, id: result.insertId || req.body.id });
  });
};

// Update order
const updateOrder = (req, res) => {
  Order.updateOrder(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(req.body);
  });
};

// Delete order
const deleteOrder = (req, res) => {
  Order.deleteOrder(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Order deleted successfully" });
  });
};

module.exports = {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
};
