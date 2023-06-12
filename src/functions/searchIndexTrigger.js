const { app } = require('@azure/functions');

app.timer('searchIndexTrigger', {
    schedule: '*/5 * * * * *',
    handler: (myTimer, context) => {
        context.log('Timer function processed request.');
    }
});
