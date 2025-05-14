const pool = require("./db");

exports.getAllOrders = (callback) => {
  pool.query("SELECT * FROM Order", callback);
};

exports.getOrderByorder_id = (order_id, callback) => {
  pool.query(
    "SELECT * FROM Order WHERE order_id = ?",
    [order_id],
    callback
  );
};


exports.addOrder = (Order, callback) => {
  const {
    order_id,
    order_date,
    customer_id,
    total_amount,
  } = Order;
  const query = `INSERT INTO Order (order_date, customer_id, total_amount) VALUES (?, ?, ?)`;
  const values = [
    order_date,
    customer_id,
    total_amount,
  ];
  pool.query(query, values, callback);
};

exports.updateOrder = (Order, callback) => {
  const {
    order_id,
    order_date,
    customer_id,
    total_amount,
    } = Order;
  const query = `UPDATE Order SET order_date = ?, customer_id = ?, total_amount = ? WHERE order_id = ?`;
  const values = [
    order_date,
    customer_id,
    total_amount,
    order_id,
  ];
  pool.query(query, values, callback);
};

exports.deleteProduct = (product_id, callback) => {
  pool.query(
    "DELETE FROM Order WHERE order_id = ?",
    [order_id],
    callback
  );
};
