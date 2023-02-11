const express = require('express');

const app = express();

// Middleware

const customMiddleware = (req, res, next) => {
    if (!req.query.age) {
        res.send('Please provide age.')
    } else if (req.query.age < 18) {
        res.send('You cannot access the content of the page.')
    } else {
        next(); // must call this function when not calling send method, next method to continue route process
    }
}

app.use(customMiddleware)

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/users', (req, res) => {
    res.send("Users")
})

app.listen(5000)