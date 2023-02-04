const fs = require('fs');
const path = require('path');

// const dirName = path.join('crud');

// fs.mkdir(dirName,(err) => {
//     if (!err) console.log('dir created');
// })

const dirName = path.join(__dirname, 'crud')
const fileName = dirName + '/apple.txt'
// fs.writeFileSync(fileName, 'this is simple text file.') // ** create and write content into file

// fs.appendFile(fileName, '\nthis is new content appended', (err) => { // ** append new content into file
//     if (!err) console.log('dir append success!');
// })

// fs.rename(fileName, `${dirName}/fruits.txt`, (err) => { // ** rename file name
//     if (!err) console.log('dir rename success!');
// })

// fs.unlink(dirName + '/fruits.txt', (err) => { // ** delete file
//     if (!err) console.log('dir deleted success!');
// })