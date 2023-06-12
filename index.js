const fs = require('fs');
const path = require('path');

const { app, output } = require('@azure/functions');

app.timer('timerTrigger1', {
    schedule: '*/5 * * * * *',
    handler: (myTimer, context) => {
        context.log(`Something has happened haha. Invocation ID: "${context.invocationId}"`);
        const filePath = path.resolve(__dirname,'output.txt');
        const data = new Date().toISOString() + '\n';

        fs.appendFile(filePath, data, (err) => {
            if (err) {
                console.log(`Error occurred: ${err}`);
            } else {
                console.log(`Date string appended to file: ${filePath}`);
            }
        });
    }
});