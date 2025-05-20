const Supplier = require("../models/Supplier");

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.getAll();
    res.json(suppliers);
  } catch (error) {
    console.error("Error in getAllSuppliers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.getById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    res.json(supplier);
  } catch (error) {
    console.error("Error in getSupplierById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.searchSupplierByName = async (req, res) => {
  try {
    const suppliers = await Supplier.searchByName(req.query.name);
    res.json(suppliers);
  } catch (error) {
    console.error("Error in searchSupplierByName:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createSupplier = async (req, res) => {
  try {
    const supplierId = await Supplier.create(req.body);
    res
      .status(201)
      .json({ id: supplierId, message: "Supplier created successfully" });
  } catch (error) {
    console.error("Error in createSupplier:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const success = await Supplier.update(req.params.id, req.body);
    if (!success) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    res.json({ message: "Supplier updated successfully" });
  } catch (error) {
    console.error("Error in updateSupplier:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    const success = await Supplier.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    res.json({ message: "Supplier deleted successfully" });
  } catch (error) {
    console.error("Error in deleteSupplier:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
