"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class HttpProxy {
    constructor(log) {
        log.debug("Creating HttpProxy...");
        this.proxyServer = http.createServer(function (request, response) {
            //      var proxy = http.createClient(80, request.headers['host'])
            var proxy_request = http.request({
                port: 80,
                host: request.headers['host'],
                method: request.method,
                path: request.url,
                headers: request.headers
            });
            //var proxy_request = proxy.request(request.method, request.url, request.headers);      
            proxy_request.addListener('response', function (proxy_response) {
                proxy_response.addListener('data', function (chunk) {
                    response.write(chunk, 'binary');
                });
                proxy_response.addListener('end', function () {
                    response.end();
                });
                response.writeHead(proxy_response.statusCode, proxy_response.headers);
            });
            request.addListener('data', function (chunk) {
                proxy_request.write(chunk, 'binary');
            });
            request.addListener('end', function () {
                proxy_request.end();
            });
        });
    }
    listen(port) {
        this.proxyServer.listen(port);
    }
}
exports.HttpProxy = HttpProxy;
/*

var http = require('http');

*/
//# sourceMappingURL=http-proxy.js.map