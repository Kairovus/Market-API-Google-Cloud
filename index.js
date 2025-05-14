const express = require('express');
const app = express();
app.use(express.json());

// Import and use your product routes
const productRoutes = require('./routes/r_product');
app.use('/products', productRoutes);

// Optionally: add error handling, logging, etc.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});