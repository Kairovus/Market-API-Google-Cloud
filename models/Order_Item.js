const db = require("../config/db");

class OrderItem {
  static async getAll() {
    try {
      const [rows] = await db.query("SELECT * FROM Order_Item");
      return rows;
    } catch (error) {
      console.error("Error in getAll:", error);
      throw new Error("Failed to fetch order items");
    }
  }

  static async getById(id) {
    try {
      const [rows] = await db.query(
        "SELECT * FROM Order_Item WHERE order_item_id = ?",
        [id]
      );
      return rows[0];
    } catch (error) {
      console.error("Error in getById:", error);
      throw new Error("Failed to fetch order item");
    }
  }

  static async create(orderItemData) {
    try {
      const [result] = await db.query(
        "INSERT INTO Order_Item (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [
          orderItemData.order_id,
          orderItemData.product_id,
          orderItemData.quantity,
          orderItemData.price,
        ]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error in create:", error);
      throw new Error("Failed to create order item");
    }
  }

  static async update(id, orderItemData) {
    try {
      const [result] = await db.query(
        "UPDATE Order_Item SET order_id = ?, product_id = ?, quantity = ?, price = ? WHERE order_item_id = ?",
        [
          orderItemData.order_id,
          orderItemData.product_id,
          orderItemData.quantity,
          orderItemData.price,
          id,
        ]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in update:", error);
      throw new Error("Failed to update order item");
    }
  }

  static async delete(id) {
    try {
      const [result] = await db.query(
        "DELETE FROM Order_Item WHERE order_item_id = ?",
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error in delete:", error);
      throw new Error("Failed to delete order item");
    }
  }
}

module.exports = OrderItem;
