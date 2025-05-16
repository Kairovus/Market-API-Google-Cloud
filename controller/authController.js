const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../config/db");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const [existingUsers] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const [result] = await pool.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword]
    );

    // Generate token
    const token = jwt.sign(
      { id: result.insertId, email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "User registered successfully!",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    const user = users[0];

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      message: "Login successful!",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  register,
  login,
};
