const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(JSON.stringify({
        name: 'Vicky',
        email: 'vicky@test.com',
        contact: 'use same email'
    }))
    res.end();
}).listen(4440)