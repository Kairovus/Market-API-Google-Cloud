const Order_Item = require("../models/Order_Item.js");

// Get all order items
const getAllOrderItems = (req, res) => {
  Order_Item.getAllOrderItem((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get order item by ID
const getOrderItemById = (req, res) => {
  Order_Item.getByorder_item_id(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add new order item
const addOrderItem = (req, res) => {
  Order_Item.addOrder_Item(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ...req.body, id: result.insertId || req.body.id });
  });
};

// Update order item
const updateOrderItem = (req, res) => {
  Order_Item.updateOrder_Item(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(req.body);
  });
};

// Delete order item
const deleteOrderItem = (req, res) => {
  Order_Item.deleteOrder_Item(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Order item deleted successfully" });
  });
};

module.exports = {
  getAllOrderItems,
  getOrderItemById,
  addOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
