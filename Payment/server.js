// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentRoute');

const app = express();

// Connect to MongoDB
connectDB();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Payment routes
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
