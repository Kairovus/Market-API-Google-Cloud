
const pool = require('./db');

exports.getAllCategory = (callback) => {
    pool.query('SELECT * FROM Category', callback);
};

exports.searchCategoryByName = (name, callback) => {
    pool.query('SELECT * FROM Category WHERE name LIKE ?', [`%${name}%`], callback);
};

exports.addProduct = (Customer, callback) => {
    const {
      customer_id,
      name,
      email,
      phone,
      address
    } = Customer;
    const query = `INSERT INTO Customer (name, email, phone, address) VALUES (?, ?, ?, ?)`;
    const values = [
      name,
      email,
      phone,
      address
    ];
    pool.query(query, values, callback);
  };
  
  exports.updateCustomer = (Customer, callback) => {
    const {
        customer_id,
        name,
        email,
        phone,
        address
    } = Customer;
    const query = `UPDATE Customer SET name = ?, email = ?, phone = ?, address = ? WHERE customer_id = ?`;
    const values = [
        name,
        email,
        phone,
        address
    ];
    pool.query(query, values, callback);
  };
  
  exports.deleteProduct = (customer_id, callback) => {
    pool.query(
      "DELETE FROM Customer WHERE customer_id = ?",
      [customer_id],
      callback
    );
  };
  