"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redirector_1 = require("./redirector");
var redirector = new redirector_1.Redirector();
redirector.listen(3000);
//
// Create your target server
// WORKING proxy code
/*
var http = require('http'),
    httpProxy = require('http-proxy');


httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000); // See (†)

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers));
  res.end();
}).listen(9000);
*/ 
//# sourceMappingURL=index.js.map