const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

// Get all orders
router.get("/", orderController.getAllOrders);

// Get order by ID
router.get("/:id", orderController.getOrderById);

// Add new order
router.post("/", orderController.addOrder);

// Update order
router.put("/", orderController.updateOrder);

// Delete order
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
