
import * as http from "http";
import {Log} from "./logger";


export class HttpProxy {
  private proxyServer : http.Server;

  constructor(log : Log) {
    log.debug("Creating HttpProxy...");
    this.proxyServer = http.createServer(function(request, response) {

      var proxy_request = http.request({
          port: 80,
          host: request.headers['host'],
          method: request.method,
          path: request.url,
          headers : request.headers
      });
     
      proxy_request.addListener('response', function (proxy_response) {

        proxy_response.addListener('data', function(chunk) {
          response.write(chunk, 'binary');
        });

        proxy_response.addListener('end', function() {
          response.end();
        });

        response.writeHead(proxy_response.statusCode, proxy_response.headers);
      });
      
      request.addListener('data', function(chunk) {
        proxy_request.write(chunk, 'binary');
      });

      request.addListener('end', function() {
        proxy_request.end();
      });
    });   
  }

  public listen(port : number) : void {
    this.proxyServer.listen(port);
  }
}

/*

var http = require('http');

*/
