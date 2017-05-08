var services = require('./DeviceServer_grpc_pb.js');  
var messages = require('./DeviceServer_pb.js');  
var grpc = require('grpc')  
var hello = function(call, callback) {  
//  var response = new messages.;  
//  response.setHellostring("hello," + call.request.getName());  
   new messages.
  callback(null, response);  
}  
var server = new grpc.Server();  
server.addService(  
  services.RFIDDeviceServerService,
  {  
    hello:hello  
  }  
);  
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());  
server.start(function(err,data){  
  console.log(err);  
  console.log(data);  
}); 