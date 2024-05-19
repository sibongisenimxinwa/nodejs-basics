const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.listen(5000, () => console.log('Server running on port 5000'));