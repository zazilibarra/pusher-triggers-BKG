const dotenv = require('dotenv'); 
dotenv.config();

module.exports = {
	port:process.env.PORT || 3000,
	appId: '826122',
    key: 'b344eb50f6349a1bee5f',
    secret: 'c70f05543d3c1557fd3e',
    cluster: 'us2',
}