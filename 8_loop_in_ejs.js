const express = require('express');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');

const publicPath = path.join(__dirname, 'public')

/**
 * using below code we dont need to write file extension to access route
 */

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (_, res) => {
    const user = {
        name: 'Vicky Ahuja',
        email: 'vicky@test.com',
        mobile: '0099887766',
        skills: ['html', 'css', 'node', 'js', 'php', 'react', 'ios', 'android']
    }
    res.render(`profile`, {user})
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