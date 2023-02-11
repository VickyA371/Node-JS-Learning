module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('Please provide age.')
    } else if (req.query.age < 18) {
        res.send('You cannot access the content of the page.')
    } else {
        next(); // must call this function when not calling send method, next method to continue route process
    }
}