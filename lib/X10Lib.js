'use strict';

var RenderLib = require('./RenderLib');

//Method to get all de info of an account
var SendCommand = function(req, res) {


  var model = req.body;
  var data= model.data;

  var command=data.house+data.unit+data.operation+global.app_config.x10.repeat;

  //global.myPort.write(command+'\n');

  RenderLib.RenderDefault(req, res, 200);//system error

}

exports.SendCommand = SendCommand;
