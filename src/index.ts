
// Create your target server
// WORKING proxy code


var http = require('http'),
    httpProxy = require('http-proxy');


httpProxy.createProxyServer({target:'http://jccsub2web.newgen.corp'}).listen(8000); // See (†)

