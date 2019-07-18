'use strict'

function triggerViaje(req, res){
    let idViaje = req.body.idViaje;

    console.log(idViaje);

    res.status(200).send({id: idViaje});
}

module.exports = {
    triggerViaje
}