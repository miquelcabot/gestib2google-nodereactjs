#!/usr/bin/env node

/** app.js  */

const express = require('express');

const app = express();

// Definim el port i IP on s'ha d'executar the port to run on
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3001);
app.set('ip', process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');

// Feim log de cada request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => res.send('Servidor g2g-backend'));

app.get('/importgestib', function(req, res) {
    res
      .status(200)
      .json( {"importgestib" : true} );
});

app.get('/usersgestib', function(req, res) {
    res
      .status(200)
      .json( {"usergestib" : true} );
});

// Escoltam les peticions
var server = app.listen(app.get('port'), app.get('ip'), function() {
    var port = server.address().port;
    console.log('Servidor g2g-backend executant-se a http://%s:%s', app.get('ip'), port);
    console.log('Pitja CTRL+C per aturar');
});
