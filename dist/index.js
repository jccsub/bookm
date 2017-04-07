// Create your target server
// WORKING proxy code
var http = require('http'), httpProxy = require('http-proxy');
httpProxy.createProxyServer({ target: 'http://jccsub2web.newgen.corp' }).listen(8000); // See (†)
/*
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers));
  res.end();
}).listen(9000);
*/
/*
import {Proxy} from './proxy';

var proxy = new Proxy();
proxy.listen(5001);
*/ 
//# sourceMappingURL=index.js.map