const db = require("../config/db");

class Supplier {
  static async getAll() {
    try {
      const [rows] = await db.query("SELECT * FROM Supplier");
      return rows;
    } catch (error) {
      console.error("Error in getAll:", error);
      throw new Error("Failed to fetch suppliers");
    }
  }

  static async getById(id) {
    try {
      const [rows] = await db.query(
        "SELECT * FROM Supplier WHERE supplier_id = ?",
        [id]
      );
      return rows[0];
    } catch (error) {
      console.error("Error in getById:", error);
      throw new Error("Failed to fetch supplier");
    }
  }

  static async searchByName(name) {
    try {
      const [rows] = await db.query(
        "SELECT * FROM Supplier WHERE name LIKE ?",
        [`%${name}%`]
      );
      return rows;
    } catch (error) {
      console.error("Error in searchByName:", error);
      throw new Error("Failed to search suppliers");
    }
  }

  static async create(supplierData) {
    try {
      const [result] = await db.query(
        "INSERT INTO Supplier (name, contact_email, phone) VALUES (?, ?, ?)",
        [supplierData.name, supplierData.contact_email, supplierData.phone]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error in create:", error);
      throw new Error("Failed to create supplier");
    }
  }

  static async update(id, supplierData) {
    try {
      const [result] = await db.query(
        "UPDATE Supplier SET name = ?, contact_email = ?, phone = ? WHERE supplier_id = ?",
        [supplierData.name, supplierData.contact_email, supplierData.phone, id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in update:", error);
      throw new Error("Failed to update supplier");
    }
  }

  static async delete(id) {
    try {
      const [result] = await db.query(
        "DELETE FROM Supplier WHERE supplier_id = ?",
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in delete:", error);
      throw new Error("Failed to delete supplier");
    }
  }
}

module.exports = Supplier;
