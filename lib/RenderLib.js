'use strict';

//var mongoose = require('mongoose');
//var StatusModel = require('../models/status');

//Send an standar JSON response message
var RenderDefault = function(req, res, status_code) {
/*
    //Find the status_code in the data base
    StatusModel.findOne({_id: status_code}, function(err, status) {

        if (err)
            console.log(err);
        else if (status)
            res.json({status_code: status._id, status_desc: status.desc});
        else
            res.json({status_code: 500, status_desc: "system error"});//system error

    });
    */

    res.json({status_code: status_code, status_desc: "Command success",data:{}});//system error

}

exports.RenderDefault = RenderDefault;
