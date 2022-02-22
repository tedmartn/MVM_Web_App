const express = require('express');
require('./db');

const app = express();
const PORT = process.env.PORT || 3030;

app.get('/', (req,res) => {
    res.send('<h2>This is from the index.js file</h2>');
});

app.listen(PORT, () => {
    console.log('server start on port ${PORT}');
});