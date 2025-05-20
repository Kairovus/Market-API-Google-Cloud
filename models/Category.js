const db = require("../config/db");

class Category {
  static async getAll() {
    try {
      const [rows] = await db.query("SELECT * FROM Category");
      return rows;
    } catch (error) {
      console.error("Error in getAll:", error);
      throw new Error("Failed to fetch categories");
    }
  }

  static async searchByName(name) {
    try {
      const [rows] = await db.query(
        "SELECT * FROM Category WHERE name LIKE ?",
        [`%${name}%`]
      );
      return rows;
    } catch (error) {
      console.error("Error in searchByName:", error);
      throw new Error("Failed to search categories");
    }
  }

  static async create(categoryData) {
    try {
      const [result] = await db.query(
        "INSERT INTO Category (category_name) VALUES (?)",
        [categoryData.category_name]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error in create:", error);
      throw new Error("Failed to create category");
    }
  }

  static async update(id, categoryData) {
    try {
      const [result] = await db.query(
        "UPDATE Category SET category_name = ? WHERE category_id = ?",
        [categoryData.category_name, id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in update:", error);
      throw new Error("Failed to update category");
    }
  }

  static async delete(id) {
    try {
      const [result] = await db.query(
        "DELETE FROM Category WHERE category_id = ?",
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in delete:", error);
      throw new Error("Failed to delete category");
    }
  }
}

module.exports = Category;
