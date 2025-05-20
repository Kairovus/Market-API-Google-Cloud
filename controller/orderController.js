const Order = require("../models/Order");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.getAll();
    res.json(orders);
  } catch (error) {
    console.error("Error in getAllOrders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.getById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    console.error("Error in getOrderById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const orderId = await Order.create(req.body);
    res
      .status(201)
      .json({ id: orderId, message: "Order created successfully" });
  } catch (error) {
    console.error("Error in createOrder:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const success = await Order.update(req.params.id, req.body);
    if (!success) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order updated successfully" });
  } catch (error) {
    console.error("Error in updateOrder:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const success = await Order.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error in deleteOrder:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
