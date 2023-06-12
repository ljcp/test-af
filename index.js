const { app } = require('@azure/functions');

app.http('helloWorld1', {
    route: 'hello/world',
    methods: ['POST', 'GET'],
    handler: async (request, context) => {
        context.log('Http function was triggered.');
        return { body: 'Hello, world!' };
    }
});