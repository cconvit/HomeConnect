'use strict';

module.exports = function(app) {

    /*******************X10 Commands*****************/

    var X10Lib = require('../lib/X10Lib');

    app.post('/x10/send', function(req, res) {
console.log("prueba");
        X10Lib.SendCommand(req, res);
    });

    /*******************ACCOUNT*****************/

  app.get('/x10/send', function (req, res) {

        res.render('index', {});

    });
};
