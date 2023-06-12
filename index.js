const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'output.txt');
const data = new Date().toISOString() + '\n';

fs.appendFile(filePath, data, (err) => {
    if (err) {
        console.log(`Error occurred: ${err}`);
    } else {
        console.log(`Date string appended to file: ${filePath}`);
    }
});
