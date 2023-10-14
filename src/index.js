var gtts = require('node-gtts')('ru');

const port = process.env.PORT || 5005;

gtts.createServer(port);

console.log(`gtts stream is running on ${port}`)