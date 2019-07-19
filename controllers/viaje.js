'use strict'

const Pusher = require('../pusher-config');

function triggerViaje(req, res) {
    let idViaje = req.body.idViaje;

    console.log(idViaje);

    Pusher.channel.trigger('viajes', 'update-evidencias-fisicas', {id: idViaje});

	res.status(200).send(`FINISH PUSHER`);
}

module.exports = {
    triggerViaje
}