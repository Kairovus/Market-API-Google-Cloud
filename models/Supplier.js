const pool = require("./db");

exports.getAllSuppliers = (callback) => {
  pool.query("SELECT * FROM Supplier", callback);
};

exports.getSupplierBySupplier_id = (Supplier_id, callback) => {
  pool.query(
    "SELECT * FROM Supplier WHERE Supplier_id = ?",
    [Supplier_id],
    callback
  );
};

exports.searchSupplierByName = (name, callback) => {
  pool.query(
    "SELECT * FROM Supplier WHERE name LIKE ?",
    [`%${name}%`],
    callback
  );
};

exports.addSupplier = (Supplier, callback) => {
  const { supplier_id, name, contact_email, phone } = Supplier;
  const query = `INSERT INTO Supplier (name, contact_email, phone) VALUES (?, ?, ?)`;
  const values = [name, contact_email, phone];
  pool.query(query, values, callback);
};

exports.updateSupplier = (Supplier, callback) => {
  const { supplier_id, name, contact_email, phone } = Supplier;
  const query = `UPDATE Supplier SET name = ?, contact_email = ?, phone = ? WHERE supplier_id = ?`;
  const values = [name, contact_email, phone];
  pool.query(query, values, callback);
};

exports.deleteSupplier = (supplier_id, callback) => {
  pool.query(
    "DELETE FROM Supplier WHERE supplier_id = ?",
    [supplier_id],
    callback
  );
};
