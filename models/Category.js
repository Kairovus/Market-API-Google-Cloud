const pool = require("../config/db");

exports.getAllCategory = (callback) => {
  pool.query("SELECT * FROM Category", callback);
};

exports.searchCategoryByName = (name, callback) => {
  pool.query(
    "SELECT * FROM Category WHERE name LIKE ?",
    [`%${name}%`],
    callback
  );
};

exports.addCategory = (Category, callback) => {
  const { category_id, category_name } = Category;
  const query = `INSERT INTO Category (category_name) VALUES (?)`;
  const values = [category_name];
  pool.query(query, values, callback);
};

exports.updateCategory = (Category, callback) => {
  const { category_id, category_name } = Category;
  const query = `UPDATE Category SET category_name = ? WHERE category_id = ?`;
  const values = [category_name];
  pool.query(query, values, callback);
};

exports.deleteCategory = (category_id, callback) => {
  pool.query(
    "DELETE FROM Category WHERE category_id = ?",
    [category_id],
    callback
  );
};
