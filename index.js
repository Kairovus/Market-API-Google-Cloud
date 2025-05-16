require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

// Import routes
const authRoutes = require("./routes/r_auth");
const productRoutes = require("./routes/r_product");
const categoryRoutes = require("./routes/r_category");
const customerRoutes = require("./routes/r_customer");
const orderRoutes = require("./routes/r_order");
const orderItemRoutes = require("./routes/r_Order_Item");
const supplierRoutes = require("./routes/r_supplier");

// Import middleware
const verifyToken = require("./middleware/auth");

// Public routes
app.use("/auth", authRoutes);

// Protected routes
app.use("/products", verifyToken, productRoutes);
app.use("/categories", verifyToken, categoryRoutes);
app.use("/customers", verifyToken, customerRoutes);
app.use("/orders", verifyToken, orderRoutes);
app.use("/order-items", verifyToken, orderItemRoutes);
app.use("/suppliers", verifyToken, supplierRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
