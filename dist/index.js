"use strict";
const winston_logger_1 = require('./winston-logger');
var logger = new winston_logger_1.WinstonLog();
logger.level = 'Debug';
logger.debug('testing123.');
