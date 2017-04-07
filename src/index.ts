
import {WinstonLog} from './winston-logger';
import {HttpProxy} from './http-proxy';

var logger = new WinstonLog();
logger.level = 'Debug';

var proxy = new HttpProxy(logger);

proxy.listen(9901);