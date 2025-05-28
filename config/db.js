require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
const testConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log("Connected to database through Cloud SQL Auth Proxy successfully!");
    connection.release();
  } catch (err) {
    console.error("Database connection failed:", err);
    // Don't exit the process, just log the error
  }
};

testConnection();

module.exports = db;
