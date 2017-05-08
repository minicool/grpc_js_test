var grpc = require('grpc');  
var messages = require('./DeviceServer_pb.js');  
var services = require('./DeviceServer_grpc_pb.js');

var request = new messages.RFIDcard_writeData_Request;  
request.setAssetsId("123456789010");
request.setAssetsName("TEST");  
var client = new services.RFIDDeviceServerClient(  
  'localhost:50051',  
  grpc.credentials.createInsecure()  
);  
client.RFIDcard_writeData_reply(request, function(err,data){  
  if(err){  
    console.error(err);  
  }  
  console.log(data);  
  console.log(data.getAssetsGloballd());  
}) 