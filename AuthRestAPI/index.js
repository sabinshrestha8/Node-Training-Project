require('dotenv').config()
require('./config/database');
// const { request } = require('express');
const express = require('express');
const app = express();


// Import Routes
const authRoute = require('./routes/userRoute');
const SongsRoute = require('./routes/songsRoute');
const CategoryRoute = require('./routes/categoryRoute');

// Middlewares
app.use(express.json());

// Route Middlewares
app.use('/user', authRoute);
app.use(SongsRoute);
app.use(CategoryRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});