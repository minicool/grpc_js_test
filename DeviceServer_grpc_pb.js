// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015, Google Inc.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
'use strict';
var grpc = require('grpc');
var DeviceServer_pb = require('./DeviceServer_pb.js');

function serialize_RFIDDevice_Get_assertsList_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.Get_assertsList_reply)) {
    throw new Error('Expected argument of type RFIDDevice.Get_assertsList_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Get_assertsList_reply(buffer_arg) {
  return DeviceServer_pb.Get_assertsList_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Get_assertsList_request(arg) {
  if (!(arg instanceof DeviceServer_pb.Get_assertsList_request)) {
    throw new Error('Expected argument of type RFIDDevice.Get_assertsList_request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Get_assertsList_request(buffer_arg) {
  return DeviceServer_pb.Get_assertsList_request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Get_assetsInfo_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.Get_assetsInfo_reply)) {
    throw new Error('Expected argument of type RFIDDevice.Get_assetsInfo_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Get_assetsInfo_reply(buffer_arg) {
  return DeviceServer_pb.Get_assetsInfo_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Get_assetsInfo_request(arg) {
  if (!(arg instanceof DeviceServer_pb.Get_assetsInfo_request)) {
    throw new Error('Expected argument of type RFIDDevice.Get_assetsInfo_request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Get_assetsInfo_request(buffer_arg) {
  return DeviceServer_pb.Get_assetsInfo_request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Get_stockList_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.Get_stockList_reply)) {
    throw new Error('Expected argument of type RFIDDevice.Get_stockList_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Get_stockList_reply(buffer_arg) {
  return DeviceServer_pb.Get_stockList_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Get_stockList_request(arg) {
  if (!(arg instanceof DeviceServer_pb.Get_stockList_request)) {
    throw new Error('Expected argument of type RFIDDevice.Get_stockList_request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Get_stockList_request(buffer_arg) {
  return DeviceServer_pb.Get_stockList_request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Get_terminal_info_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.Get_terminal_info_reply)) {
    throw new Error('Expected argument of type RFIDDevice.Get_terminal_info_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Get_terminal_info_reply(buffer_arg) {
  return DeviceServer_pb.Get_terminal_info_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Get_terminal_info_request(arg) {
  if (!(arg instanceof DeviceServer_pb.Get_terminal_info_request)) {
    throw new Error('Expected argument of type RFIDDevice.Get_terminal_info_request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Get_terminal_info_request(buffer_arg) {
  return DeviceServer_pb.Get_terminal_info_request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Modify_assetsInfo_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.Modify_assetsInfo_reply)) {
    throw new Error('Expected argument of type RFIDDevice.Modify_assetsInfo_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Modify_assetsInfo_reply(buffer_arg) {
  return DeviceServer_pb.Modify_assetsInfo_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Modify_assetsInfo_request(arg) {
  if (!(arg instanceof DeviceServer_pb.Modify_assetsInfo_request)) {
    throw new Error('Expected argument of type RFIDDevice.Modify_assetsInfo_request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Modify_assetsInfo_request(buffer_arg) {
  return DeviceServer_pb.Modify_assetsInfo_request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_RFIDcard_writeData_Request(arg) {
  if (!(arg instanceof DeviceServer_pb.RFIDcard_writeData_Request)) {
    throw new Error('Expected argument of type RFIDDevice.RFIDcard_writeData_Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_RFIDcard_writeData_Request(buffer_arg) {
  return DeviceServer_pb.RFIDcard_writeData_Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_RFIDcard_writeData_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.RFIDcard_writeData_reply)) {
    throw new Error('Expected argument of type RFIDDevice.RFIDcard_writeData_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_RFIDcard_writeData_reply(buffer_arg) {
  return DeviceServer_pb.RFIDcard_writeData_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_RFIDprint_writeData_Request(arg) {
  if (!(arg instanceof DeviceServer_pb.RFIDprint_writeData_Request)) {
    throw new Error('Expected argument of type RFIDDevice.RFIDprint_writeData_Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_RFIDprint_writeData_Request(buffer_arg) {
  return DeviceServer_pb.RFIDprint_writeData_Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_RFIDprint_writeData_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.RFIDprint_writeData_reply)) {
    throw new Error('Expected argument of type RFIDDevice.RFIDprint_writeData_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_RFIDprint_writeData_reply(buffer_arg) {
  return DeviceServer_pb.RFIDprint_writeData_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_RFIDread_writeData_Request(arg) {
  if (!(arg instanceof DeviceServer_pb.RFIDread_writeData_Request)) {
    throw new Error('Expected argument of type RFIDDevice.RFIDread_writeData_Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_RFIDread_writeData_Request(buffer_arg) {
  return DeviceServer_pb.RFIDread_writeData_Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_RFIDread_writeData_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.RFIDread_writeData_reply)) {
    throw new Error('Expected argument of type RFIDDevice.RFIDread_writeData_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_RFIDread_writeData_reply(buffer_arg) {
  return DeviceServer_pb.RFIDread_writeData_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Update_assetsList_reply(arg) {
  if (!(arg instanceof DeviceServer_pb.Update_assetsList_reply)) {
    throw new Error('Expected argument of type RFIDDevice.Update_assetsList_reply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Update_assetsList_reply(buffer_arg) {
  return DeviceServer_pb.Update_assetsList_reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RFIDDevice_Update_assetsList_request(arg) {
  if (!(arg instanceof DeviceServer_pb.Update_assetsList_request)) {
    throw new Error('Expected argument of type RFIDDevice.Update_assetsList_request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RFIDDevice_Update_assetsList_request(buffer_arg) {
  return DeviceServer_pb.Update_assetsList_request.deserializeBinary(new Uint8Array(buffer_arg));
}


// The RFID Device service definition.
var RFIDDeviceServerService = exports.RFIDDeviceServerService = {
  // RFID card
  rFIDcard_writeData: {
    path: '/RFIDDevice.RFIDDeviceServer/RFIDcard_writeData',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.RFIDcard_writeData_Request,
    responseType: DeviceServer_pb.RFIDcard_writeData_reply,
    requestSerialize: serialize_RFIDDevice_RFIDcard_writeData_Request,
    requestDeserialize: deserialize_RFIDDevice_RFIDcard_writeData_Request,
    responseSerialize: serialize_RFIDDevice_RFIDcard_writeData_reply,
    responseDeserialize: deserialize_RFIDDevice_RFIDcard_writeData_reply,
  },
  // RFID print
  rFIDprint_writeData: {
    path: '/RFIDDevice.RFIDDeviceServer/RFIDprint_writeData',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.RFIDprint_writeData_Request,
    responseType: DeviceServer_pb.RFIDprint_writeData_reply,
    requestSerialize: serialize_RFIDDevice_RFIDprint_writeData_Request,
    requestDeserialize: deserialize_RFIDDevice_RFIDprint_writeData_Request,
    responseSerialize: serialize_RFIDDevice_RFIDprint_writeData_reply,
    responseDeserialize: deserialize_RFIDDevice_RFIDprint_writeData_reply,
  },
};

exports.RFIDDeviceServerClient = grpc.makeGenericClientConstructor(RFIDDeviceServerService);
// The System Device server
var SystemDeviceServerService = exports.SystemDeviceServerService = {
  // RFID read
  rFIDread_writeData: {
    path: '/RFIDDevice.SystemDeviceServer/RFIDread_writeData',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.RFIDread_writeData_Request,
    responseType: DeviceServer_pb.RFIDread_writeData_reply,
    requestSerialize: serialize_RFIDDevice_RFIDread_writeData_Request,
    requestDeserialize: deserialize_RFIDDevice_RFIDread_writeData_Request,
    responseSerialize: serialize_RFIDDevice_RFIDread_writeData_reply,
    responseDeserialize: deserialize_RFIDDevice_RFIDread_writeData_reply,
  },
  // RFID APP
  getAssetsInfo: {
    path: '/RFIDDevice.SystemDeviceServer/GetAssetsInfo',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.Get_assetsInfo_request,
    responseType: DeviceServer_pb.Get_assetsInfo_reply,
    requestSerialize: serialize_RFIDDevice_Get_assetsInfo_request,
    requestDeserialize: deserialize_RFIDDevice_Get_assetsInfo_request,
    responseSerialize: serialize_RFIDDevice_Get_assetsInfo_reply,
    responseDeserialize: deserialize_RFIDDevice_Get_assetsInfo_reply,
  },
  // terminal info 
  getTerminaInfo: {
    path: '/RFIDDevice.SystemDeviceServer/GetTerminaInfo',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.Get_terminal_info_request,
    responseType: DeviceServer_pb.Get_terminal_info_reply,
    requestSerialize: serialize_RFIDDevice_Get_terminal_info_request,
    requestDeserialize: deserialize_RFIDDevice_Get_terminal_info_request,
    responseSerialize: serialize_RFIDDevice_Get_terminal_info_reply,
    responseDeserialize: deserialize_RFIDDevice_Get_terminal_info_reply,
  },
  // modify assets info
  modifyAssetsInfo: {
    path: '/RFIDDevice.SystemDeviceServer/ModifyAssetsInfo',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.Modify_assetsInfo_request,
    responseType: DeviceServer_pb.Modify_assetsInfo_reply,
    requestSerialize: serialize_RFIDDevice_Modify_assetsInfo_request,
    requestDeserialize: deserialize_RFIDDevice_Modify_assetsInfo_request,
    responseSerialize: serialize_RFIDDevice_Modify_assetsInfo_reply,
    responseDeserialize: deserialize_RFIDDevice_Modify_assetsInfo_reply,
  },
  // get staock list
  getStaockList: {
    path: '/RFIDDevice.SystemDeviceServer/GetStaockList',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.Get_stockList_request,
    responseType: DeviceServer_pb.Get_stockList_reply,
    requestSerialize: serialize_RFIDDevice_Get_stockList_request,
    requestDeserialize: deserialize_RFIDDevice_Get_stockList_request,
    responseSerialize: serialize_RFIDDevice_Get_stockList_reply,
    responseDeserialize: deserialize_RFIDDevice_Get_stockList_reply,
  },
  // get assert list
  getAssertsList: {
    path: '/RFIDDevice.SystemDeviceServer/GetAssertsList',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.Get_assertsList_request,
    responseType: DeviceServer_pb.Get_assertsList_reply,
    requestSerialize: serialize_RFIDDevice_Get_assertsList_request,
    requestDeserialize: deserialize_RFIDDevice_Get_assertsList_request,
    responseSerialize: serialize_RFIDDevice_Get_assertsList_reply,
    responseDeserialize: deserialize_RFIDDevice_Get_assertsList_reply,
  },
  // update assets list
  updateAssetsList: {
    path: '/RFIDDevice.SystemDeviceServer/UpdateAssetsList',
    requestStream: false,
    responseStream: false,
    requestType: DeviceServer_pb.Update_assetsList_request,
    responseType: DeviceServer_pb.Update_assetsList_reply,
    requestSerialize: serialize_RFIDDevice_Update_assetsList_request,
    requestDeserialize: deserialize_RFIDDevice_Update_assetsList_request,
    responseSerialize: serialize_RFIDDevice_Update_assetsList_reply,
    responseDeserialize: deserialize_RFIDDevice_Update_assetsList_reply,
  },
};

exports.SystemDeviceServerClient = grpc.makeGenericClientConstructor(SystemDeviceServerService);
