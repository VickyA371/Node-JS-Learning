const fs = require('fs')
const input = process.argv;

switch (input[2]) {
    case 'add':
        {
            const fileName = input[3]
            const fileContents = input[4]
            if (fileName.includes('.') && typeof fileContents === 'string') {
                fs.writeFileSync(input[3], input[4])
            } else {
                console.log('invalid params for adding new file')
            }
        }
        break
    case 'remove':
        {
            const fileName = input[3]
            if (fileName.includes('.')) {
                fs.unlinkSync(input[3])
            } else {
                console.log('invalid params for removing file')
            }
        }
        break
    default:
        console.log('invalid input');
}