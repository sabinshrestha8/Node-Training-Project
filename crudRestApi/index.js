const express = require('express');
const app = express();

const categoryRoute = require('./routes/category');
const bookRoute = require('./routes/book');

app.use(express.json());
app.use(categoryRoute);
app.use(bookRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

