var services = require('./DeviceServer_grpc_pb.js');  
var messages = require('./DeviceServer_pb.js');  
var grpc = require('grpc')  

var RFIDcard_writeData = function(call, callback) {  
  var response = new messages.RFIDcard_writeData_reply;  
  response.setAssetsGloballd("1234567890123");
  response.setSuccess(true);
  callback(null, response);  
}  
var server = new grpc.Server();  
server.addService(  
  services.RFIDDeviceServerService,
  {  
    RFIDcard_writeData:RFIDcard_writeData  
  }  
);  
server.bind('0.0.0.0:40051', grpc.ServerCredentials.createInsecure());  
server.start(function(err,data){  
  console.log(err);  
  console.log(data);  
}); 