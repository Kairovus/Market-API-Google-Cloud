const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");

// Get all customers
router.get("/", customerController.getAllCustomers);

// Search customer by name
router.get("/search/:name", customerController.searchCustomerByName);

// Get customer by ID
router.get("/:id", customerController.getCustomerById);

// Add new customer
router.post("/", customerController.addCustomer);

// Update customer
router.put("/", customerController.updateCustomer);

// Delete customer
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
