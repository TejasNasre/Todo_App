const express = require('express');
const app = express();
require('./db/index.js')
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port http://localhost:${process.env.PORT}/`);
});