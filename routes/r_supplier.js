const express = require("express");
const router = express.Router();
const supplierController = require("../controller/supplierController");

// Get all suppliers
router.get("/", supplierController.getAllSuppliers);

// Search supplier by name
router.get("/search/:name", supplierController.searchSupplierByName);

// Get supplier by ID
router.get("/:id", supplierController.getSupplierById);

// Add new supplier
router.post("/", supplierController.createSupplier);

// Update supplier
router.put("/", supplierController.updateSupplier);

// Delete supplier
router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;
