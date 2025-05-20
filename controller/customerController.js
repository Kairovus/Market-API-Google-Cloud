const Customer = require("../models/Customer");

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.getAll();
    res.json(customers);
  } catch (error) {
    console.error("Error in getAllCustomers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.getById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    console.error("Error in getCustomerById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.searchCustomerByName = async (req, res) => {
  try {
    const customers = await Customer.searchByName(req.query.name);
    res.json(customers);
  } catch (error) {
    console.error("Error in searchCustomerByName:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const customerId = await Customer.create(req.body);
    res
      .status(201)
      .json({ id: customerId, message: "Customer created successfully" });
  } catch (error) {
    console.error("Error in createCustomer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const success = await Customer.update(req.params.id, req.body);
    if (!success) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json({ message: "Customer updated successfully" });
  } catch (error) {
    console.error("Error in updateCustomer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const success = await Customer.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error("Error in deleteCustomer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
