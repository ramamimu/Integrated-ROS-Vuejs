var net = require("net");
var http = require("http");
var WebSocketServer = require("websocket").server;

var client = new net.Socket();
client.connect(28097, "172.16.80.119", function () {
  // client.connect(12345, "172.16.80.119", function () {
  console.log("Refbox Connected");
  isConnected = true;
});

client.on("data", function (data) {
  console.log("Refbox : " + data);
  globalData = data.toString();
  // Send data to BS
  conn.sendUTF(data.toString());
});

client.on("close", function () {
  isConnected = false;
  console.log("Refbox Closed");
  console.log("RECONNECTING REFBOX");
  setTimeout(() => {
    if (!isConnected) {
      // client.connect(28097, "127.0.0.1", function () {
      client.connect(28097, "172.16.80.119", function () {
        console.log("Refbox SUCCESS in close");
      });
      isConnected = true;
    }
  }, 100);
});

client.on("error", function () {
  isConnected = false;
  console.log("Refbox error");
  console.log("RECONNECTING REFBOX");

  setTimeout(() => {
    if (!isConnected) {
      client.connect(28097, "172.16.80.119", function () {
        // client.connect(28097, "127.0.0.1", function () {
        console.log("Refbox SUCCESS in error");
      });
      isConnected = true;
    }
  }, 100);
});
