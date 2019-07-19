const dotenv = require('dotenv'); 
dotenv.config();

module.exports = {
	port:process.env.PORT || 3000,
	appId: process.env.APPID,
    key: process.env.KEY,
    secret: process.env.SECRET,
    cluster: process.env.CLUSTER,
}