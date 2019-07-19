const config = require('./config');
const Pusher = require('pusher');

//PUSHER
var channel = new Pusher({
    appId: config.appId,
    key: config.key,
    secret: config.secret,
    cluster: config.cluster,
    encrypted: true
});

module.exports = {
    channel
}