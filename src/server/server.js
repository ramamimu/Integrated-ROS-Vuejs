let net = require("net");
let http = require("http");
let WebSocketServer = require("websocket").server;

let globalData = null;
let isConnected = false;
// ubah server refbox di sini
// let ipRefbox = "172.16.80.186";
let ipRefbox = "172.16.80.119";

// ! BS data flusher
let server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  response.writeHead(404);
  response.end();
});

server.listen(3001, function () {
  console.log(new Date() + " BSServer is listening on port 3001");
});

wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: true,
});

wsServer.on("connect", (conn) => {
  // ! Refbox data receiver
  let client = new net.Socket();
  // port 28097, 12345
  client.connect(28097, ipRefbox, function () {
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
        client.connect(28097, ipRefbox, function () {
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
        client.connect(28097, ipRefbox, function () {
          console.log("Refbox SUCCESS in error");
        });
        isConnected = true;
      }
    }, 100);
  });
});

// export { wsServer };
