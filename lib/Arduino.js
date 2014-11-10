'use strict';

var serialport = require("serialport"),             // include the serialport library
    SerialPort  = serialport.SerialPort;

//Method to get all de info of an account
var initArduino = function() {


  global.myPort = new SerialPort(global.app_config.arduino.port,{parser: serialport.parsers.readline("\r\n") });

  myPort.on('open', function(){
    console.log('Serial Port Opend');

  });

  myPort.on('data', function (data) { // call back when data is received

      console.log(data.toString());
      //myPort.write('020203\n');
  });

}

exports.initArduino = initArduino;


//myPort.write('020206020\n');
