const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Database connection
const connectDB = require('./config/database');
connectDB();

// Body parser
app.use(express.json());

// Mount routes
app.use('/api/tasks', require('./routes/tasks'));

// Running server
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});