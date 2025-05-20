const db = require("../config/db");

class Products {
  static async getAll() {
    try {
      const [rows] = await db.query("SELECT * FROM products");
      return rows;
    } catch (error) {
      console.error("Error in getAll:", error);
      throw new Error("Failed to fetch products");
    }
  }

  static async getById(id) {
    try {
      const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [
        id,
      ]);
      return rows[0];
    } catch (error) {
      console.error("Error in getById:", error);
      throw new Error("Failed to fetch product");
    }
  }

  static async create(productData) {
    try {
      const [result] = await db.query(
        "INSERT INTO products (name, description, price, stock, category_id, supplier_id) VALUES (?, ?, ?, ?, ?, ?)",
        [
          productData.name,
          productData.description,
          productData.price,
          productData.stock,
          productData.category_id,
          productData.supplier_id,
        ]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error in create:", error);
      throw new Error("Failed to create product");
    }
  }

  static async update(id, productData) {
    try {
      const [result] = await db.query(
        "UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category_id = ?, supplier_id = ? WHERE id = ?",
        [
          productData.name,
          productData.description,
          productData.price,
          productData.stock,
          productData.category_id,
          productData.supplier_id,
          id,
        ]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in update:", error);
      throw new Error("Failed to update product");
    }
  }

  static async delete(id) {
    try {
      const [result] = await db.query("DELETE FROM products WHERE id = ?", [
        id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in delete:", error);
      throw new Error("Failed to delete product");
    }
  }

  static async searchByName(name) {
    try {
      const [rows] = await db.query(
        "SELECT * FROM products WHERE name LIKE ?",
        [`%${name}%`]
      );
      return rows;
    } catch (error) {
      console.error("Error in searchByName:", error);
      throw new Error("Failed to search products");
    }
  }
}

module.exports = Products;
