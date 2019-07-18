const dotenv = require('dotenv'); //Used for environment variables
dotenv.config();

module.exports = {
    hostname: process.env.HOSTNAME,
    port: process.env.PORT
}