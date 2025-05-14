
const pool = require('./db');

exports.getAllOrderItem = (callback) => {
    pool.query('SELECT * FROM Order_Item', callback);
};

exports.getByorder_item_id = (order_item_id, callback) => {
    pool.query('SELECT * FROM Order_Item WHERE order_item_id = ?', [order_item_id], callback);
};


exports.addOrder_Item = (Order_Item, callback) => {
    const {
      order_item_id,
      order_id,
      product_id,
      quantity,
      price
    } = Order_Item;
    const query = `INSERT INTO Order_Item (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`;
    const values = [
      order_id,
      product_id,
      quantity,
      price
    ];
    pool.query(query, values, callback);
  };
  
  exports.updateOrder_Item = (Order_Item, callback) => {
    const {
      order_item_id,
      order_id,
      product_id,
      quantity,
      price
    } = Order_Item;
    const query = `UPDATE Order_Item SET order_id = ?, product_id = ?, quantity = ?, price = ? WHERE order_item_id = ?`;
    const values = [
      order_id,
      product_id,
      quantity,
      price
    ];
    pool.query(query, values, callback);
  };
  
  exports.deleteOrder_Item = (order_item_id, callback) => {
    pool.query(
      "DELETE FROM Order_Item WHERE order_item_id = ?",
      [order_item_id],
      callback
    );
  };
  