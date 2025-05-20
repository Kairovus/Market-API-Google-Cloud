const db = require("../config/db");

class Customer {
  static async getAll() {
    try {
      const [rows] = await db.query("SELECT * FROM Customer");
      return rows;
    } catch (error) {
      console.error("Error in getAll:", error);
      throw new Error("Failed to fetch customers");
    }
  }

  static async getById(id) {
    try {
      const [rows] = await db.query(
        "SELECT * FROM Customer WHERE customer_id = ?",
        [id]
      );
      return rows[0];
    } catch (error) {
      console.error("Error in getById:", error);
      throw new Error("Failed to fetch customer");
    }
  }

  static async searchByName(name) {
    try {
      const [rows] = await db.query(
        "SELECT * FROM Customer WHERE name LIKE ?",
        [`%${name}%`]
      );
      return rows;
    } catch (error) {
      console.error("Error in searchByName:", error);
      throw new Error("Failed to search customers");
    }
  }

  static async create(customerData) {
    try {
      const [result] = await db.query(
        "INSERT INTO Customer (name, email, phone, address) VALUES (?, ?, ?, ?)",
        [
          customerData.name,
          customerData.email,
          customerData.phone,
          customerData.address,
        ]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error in create:", error);
      throw new Error("Failed to create customer");
    }
  }

  static async update(id, customerData) {
    try {
      const [result] = await db.query(
        "UPDATE Customer SET name = ?, email = ?, phone = ?, address = ? WHERE customer_id = ?",
        [
          customerData.name,
          customerData.email,
          customerData.phone,
          customerData.address,
          id,
        ]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in update:", error);
      throw new Error("Failed to update customer");
    }
  }

  static async delete(id) {
    try {
      const [result] = await db.query(
        "DELETE FROM Customer WHERE customer_id = ?",
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in delete:", error);
      throw new Error("Failed to delete customer");
    }
  }
}

module.exports = Customer;
