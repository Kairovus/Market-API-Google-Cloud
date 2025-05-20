require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false, // Changed to false for development
  },
  connectTimeout: 10000, // 10 seconds
  acquireTimeout: 10000,
  timeout: 10000,
});

// Test the connection
const testConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log("Connected to Google Cloud SQL database!");
    connection.release();
  } catch (err) {
    console.error("Database connection failed:", err);
    // Don't exit the process, just log the error
  }
};

testConnection();

module.exports = db;
