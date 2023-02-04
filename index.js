const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Welcome to home page')
})

app.get('/about', (req, res) => {
    res.send('Welcome to about page')
})

app.get('/help', (req, res) => {
    res.send('Welcome to help page')
})

app.listen(5000)