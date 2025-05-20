const express = require("express");
const router = express.Router();
const orderItemController = require("../controller/Order_ItemController");

// Get all order items
router.get("/", orderItemController.getAllOrderItems);

// Get order item by ID
router.get("/:id", orderItemController.getOrderItemById);

// Add new order item
router.post("/", orderItemController.createOrderItem);

// Update order item
router.put("/", orderItemController.updateOrderItem);

// Delete order item
router.delete("/:id", orderItemController.deleteOrderItem);

module.exports = router;
