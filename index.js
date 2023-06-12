const { app } = require("@azure/functions");

async function status(request, context) {
    context.log(`Http function processed uhm request for url "${request.url}"`);

    return {
        status: 200,
        jsonBody: {
            env: process.env
        }
    };
};

app.http('status', {
    route: "status",
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: status
});

module.exports = status

// const fs = require('fs');
// const path = require('path');

// const { app, output } = require('@azure/functions');

// app.timer('timerTrigger1', {
//     schedule: '*/5 * * * * *',
//     handler: (myTimer, context) => {
//         context.log(`Something has happened haha. Invocation ID: "${context.invocationId}"`);
//         const filePath = path.resolve(__dirname,'output.txt');
//         const data = new Date().toISOString() + '\n';

//         fs.appendFile(filePath, data, (err) => {
//             if (err) {
//                 console.log(`Error occurred: ${err}`);
//             } else {
//                 console.log(`Date string appended to file: ${filePath}`);
//             }
//         });
//     }
// });