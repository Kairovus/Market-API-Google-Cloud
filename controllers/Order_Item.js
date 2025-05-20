const OrderItem = require("../models/Order_Item");

exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.getAll();
    res.json(orderItems);
  } catch (error) {
    console.error("Error in getAllOrderItems:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItem.getById(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ message: "Order item not found" });
    }
    res.json(orderItem);
  } catch (error) {
    console.error("Error in getOrderItemById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createOrderItem = async (req, res) => {
  try {
    const orderItemId = await OrderItem.create(req.body);
    res
      .status(201)
      .json({ id: orderItemId, message: "Order item created successfully" });
  } catch (error) {
    console.error("Error in createOrderItem:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateOrderItem = async (req, res) => {
  try {
    const success = await OrderItem.update(req.params.id, req.body);
    if (!success) {
      return res.status(404).json({ message: "Order item not found" });
    }
    res.json({ message: "Order item updated successfully" });
  } catch (error) {
    console.error("Error in updateOrderItem:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteOrderItem = async (req, res) => {
  try {
    const success = await OrderItem.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ message: "Order item not found" });
    }
    res.json({ message: "Order item deleted successfully" });
  } catch (error) {
    console.error("Error in deleteOrderItem:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
