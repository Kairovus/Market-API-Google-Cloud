const pool = require("./db");

exports.getAllProducts = (callback) => {
  pool.query("SELECT * FROM Product", callback);
};

exports.getProductByproduct_id = (product_id, callback) => {
  pool.query(
    "SELECT * FROM Product WHERE product_id = ?",
    [product_id],
    callback
  );
};

exports.searchProductByName = (name, callback) => {
  pool.query(
    "SELECT * FROM Product WHERE name LIKE ?",
    [`%${name}%`],
    callback
  );
};

exports.addProduct = (Product, callback) => {
  const {
    product_id,
    name,
    description,
    price,
    stock_quantity,
    category_id,
    supplier_id,
  } = Product;
  const query = `INSERT INTO Product (name, description, price, stock_quantity, category_id, supplier_id) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [
    name,
    description,
    price,
    stock_quantity,
    category_id,
    supplier_id,
  ];
  pool.query(query, values, callback);
};

exports.updateProduct = (Product, callback) => {
  const {
    product_id,
    name,
    description,
    price,
    stock_quantity,
    category_id,
    supplier_id,
  } = Product;
  const query = `UPDATE Product SET name = ?, description = ?, price = ?, stock_quantity = ?, category_id = ?, supplier_id = ? WHERE product_id = ?`;
  const values = [
    name,
    description,
    price,
    stock_quantity,
    category_id,
    supplier_id,
    product_id,
  ];
  pool.query(query, values, callback);
};

exports.deleteProduct = (product_id, callback) => {
  pool.query(
    "DELETE FROM Product WHERE product_id = ?",
    [product_id],
    callback
  );
};
