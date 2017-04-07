"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_logger_1 = require("./winston-logger");
const http_proxy_1 = require("./http-proxy");
var logger = new winston_logger_1.WinstonLog();
logger.level = 'Debug';
var proxy = new http_proxy_1.HttpProxy(logger);
proxy.listen(9901);
//# sourceMappingURL=index.js.map