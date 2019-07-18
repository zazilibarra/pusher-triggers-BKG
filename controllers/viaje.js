'use strict'

function triggerViaje(req, res){
    let idViaje = req.body.idViaje;

    console.log(idViaje);

    pusher.trigger('viajes', 'update-evidencias-fisicas', {id: idViaje});

	res.status(200).send(`FINISH PUSHER`);
}

module.exports = {
    triggerViaje
}