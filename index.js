const express = require('express');
const app = express();

const path = require('path')

const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath))

/**
 * using below code we dont need to write file extension to access route
 */

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/help', (_, res) => {
    res.sendFile(`${publicPath}/help.html`)
})

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000)