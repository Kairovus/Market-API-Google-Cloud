// ... existing code ...
const pool = require('./db');

exports.getAllProducts = (callback) => {
    pool.query('SELECT * FROM product', callback);
};

exports.getProductById = (id, callback) => {
    pool.query('SELECT * FROM product WHERE id = ?', [id], callback);
};

exports.searchProductByName = (name, callback) => {
    pool.query('SELECT * FROM product WHERE product_name LIKE ?', [`%${name}%`], callback);
};

exports.addProduct = (product, callback) => {
    const { id, product_code, product_name, product_price, product_stock, product_description } = product;
    const query = `INSERT INTO product (id, product_code, product_name, product_price, product_stock, product_description) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [id, product_code, product_name, product_price, product_stock, product_description];
    pool.query(query, values, callback);
};

exports.updateProduct = (product, callback) => {
    const { id, product_code, product_name, product_price, product_stock, product_description } = product;
    const query = `UPDATE product SET product_code = ?, product_name = ?, product_price = ?, product_stock = ?, product_description = ? WHERE id = ?`;
    const values = [product_code, product_name, product_price, product_stock, product_description, id];
    pool.query(query, values, callback);
};

exports.deleteProduct = (id, callback) => {
    pool.query('DELETE FROM product WHERE id = ?', [id], callback);
};