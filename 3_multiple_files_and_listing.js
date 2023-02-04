const fs = require('fs')
const path = require('path');

const dirPath = path.join(__dirname, 'files')
console.log('dirPath : ', dirPath)

for (let i = 0; i < 5; i++) {
    const fileName = dirPath + `/hello${i+1}.txt`
    fs.writeFileSync(fileName, `this is content of file ${fileName}`)
}

fs.readdirSync(dirPath).forEach((files) => {
    console.log('files : ', files)
})