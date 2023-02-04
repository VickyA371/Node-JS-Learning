const express = require('express');
const app = express();

app.get('', (req, res) => {
    const name = req.query.name
    res.send(`
        <h1>Welcome, ${name ?? 'User'}</h1>
        <a href="/about">Go to about page</a>
    `)
})

app.get('/about', (req, res) => {
    const name = req.query.name
    res.send(`
        <h1>About us</h1>
        <input type="text" placeholder="Enter name" value="${name ?? ''}" />
        <a href="/">Go to Home</a>
    `)
})

app.get('/help', (req, res) => {
    res.send('Welcome to help page')
})

app.listen(5000)