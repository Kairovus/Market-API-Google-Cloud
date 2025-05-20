const db = require("../config/db");

class Order {
  static async getAll() {
    try {
      const [rows] = await db.query("SELECT * FROM Order");
      return rows;
    } catch (error) {
      console.error("Error in getAll:", error);
      throw new Error("Failed to fetch orders");
    }
  }

  static async getById(id) {
    try {
      const [rows] = await db.query("SELECT * FROM Order WHERE order_id = ?", [
        id,
      ]);
      return rows[0];
    } catch (error) {
      console.error("Error in getById:", error);
      throw new Error("Failed to fetch order");
    }
  }

  static async create(orderData) {
    try {
      const [result] = await db.query(
        "INSERT INTO Order (order_date, customer_id, total_amount) VALUES (?, ?, ?)",
        [orderData.order_date, orderData.customer_id, orderData.total_amount]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error in create:", error);
      throw new Error("Failed to create order");
    }
  }

  static async update(id, orderData) {
    try {
      const [result] = await db.query(
        "UPDATE Order SET order_date = ?, customer_id = ?, total_amount = ? WHERE order_id = ?",
        [
          orderData.order_date,
          orderData.customer_id,
          orderData.total_amount,
          id,
        ]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in update:", error);
      throw new Error("Failed to update order");
    }
  }

  static async delete(id) {
    try {
      const [result] = await db.query("DELETE FROM Order WHERE order_id = ?", [
        id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in delete:", error);
      throw new Error("Failed to delete order");
    }
  }
}

module.exports = Order;
