const pool = require("./config/db");

exports.getAllCustomers = (callback) => {
  pool.query("SELECT * FROM Customer", callback);
};

exports.getCustomerBycustomer_id = (customer_id, callback) => {
  pool.query(
    "SELECT * FROM Customer WHERE customer_id = ?",
    [customer_id],
    callback
  );
};

exports.searchCustomerByName = (name, callback) => {
  pool.query(
    "SELECT * FROM Customer WHERE name LIKE ?",
    [`%${name}%`],
    callback
  );
};

exports.addCustomer = (Customer, callback) => {
  const { customer_id, name, email, phone, address } = Customer;
  const query = `INSERT INTO Customer (name, email, phone, address) VALUES (?, ?, ?, ?)`;
  const values = [name, email, phone, address];
  pool.query(query, values, callback);
};

exports.updateCustomer = (Customer, callback) => {
  const { customer_id, name, email, phone, address } = Customer;
  const query = `UPDATE Customer SET name = ?, email = ?, phone = ?, address = ? WHERE customer_id = ?`;
  const values = [name, email, phone, address];
  pool.query(query, values, callback);
};

exports.deleteCustomer = (customer_id, callback) => {
  pool.query(
    "DELETE FROM Customer WHERE customer_id = ?",
    [customer_id],
    callback
  );
};
