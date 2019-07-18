'use strict'

const app = require('./app');
const config = require('./config');

const server = app.listen(config.port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});