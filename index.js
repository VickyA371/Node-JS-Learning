const express = require('express');

const filterMiddleware = require('./Middleware') // ** impoorting middleware from different file

const app = express();

const route = express.Router(); // ** create route to apple route level middleware

route.use(filterMiddleware);

app.get('/', (req, res) => {
    res.send("Welcome to Home")
})

// apply middleware in individual route
app.get('/users', filterMiddleware, (req, res) => {
    res.send("Welcome to Users page")
})

// ** route level middleware
route.get('/about', (req, res) => {
    res.send("Welcome to About Page.")
})

// ** route level middleware
route.get('/help', (req, res) => {
    res.send("Welcome to help page.")
})

app.use('/', route)

app.listen(5000)