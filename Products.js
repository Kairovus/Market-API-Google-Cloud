require('dotenv').config();
const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());

const API_KEY = process.env.API_KEY || 'api_key'; 
app.use((req, res, next) => { 
    const userKey = req.headers['apikey']; 
    if (userKey !== API_KEY) { 
        return res.status(401).json({ message: 'Unauthorized: Invalid API Key' }); 
    } 
    next(); 
});

/* === ROUTES === */

// Get all products
app.get('/product', (req, res) => {
    pool.query('SELECT * FROM Product', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Add new product
app.post('/product', (req, res) => {
    const {
        id,
        product_code,
        product_name,
        product_price,
        product_stock,
        product_description
    } = req.body;

    const query = `
        INSERT INTO product (
            id,
            product_code,
            product_name,
            product_price,
            product_stock,
            product_description
        ) VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
        id,
        product_code,
        product_name,
        product_price,
        product_stock,
        product_description
    ];

    pool.query(query, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({
            id: result.insertId || id, // Use insertId if auto-incremented, otherwise keep provided id
            product_code,
            product_name,
            product_price,
            product_stock,
            product_description
        });
    });
});

// Update product by ID
app.put('/product', (req, res) => {
    const {
        id,
        product_code,
        product_name,
        product_price,
        product_stock,
        product_description
    } = req.body;

    const query = `
        UPDATE product 
        SET 
            product_code = ?, 
            product_name = ?, 
            product_price = ?, 
            product_stock = ?, 
            product_description = ?
        WHERE id = ?
    `;

    const values = [
        product_code,
        product_name,
        product_price,
        product_stock,
        product_description,
        id
    ];

    pool.query(query, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({
            id,
            product_code,
            product_name,
            product_price,
            product_stock,
            product_description
        });
    });
});

// Delete product by ID
app.delete('/product/:id', (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM product WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Product deleted successfully' });
    });
});

// Search product by name (partial match)
app.get('/product/search/:name', (req, res) => {
    const name = req.params.name;

    pool.query(
        'SELECT * FROM product WHERE product_name LIKE ?',
        [`%${name}%`],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
});

// Get product by ID
app.get('/product/:id', (req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM product WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

/* === SERVER === */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
