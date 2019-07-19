'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const Viaje = require('./controllers/viaje');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.send(`API PUSHER DEMO TRIGGERS VERSIÓN:${process.env.npm_package_version}`);
});

//VIAJE
app.post('/api/triggerViaje', Viaje.triggerViaje);

module.exports = app