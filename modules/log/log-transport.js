const winston = require('winston');
require('winston-daily-rotate-file');

const ErrorTransport = new (winston.transports.DailyRotateFile)
({
	name: 'error-transport',
	level: 'error',
	json: true,
	filename: `${ENV.LOG.ERROR.FILENAME}-%DATE%${ENV.LOG.EXTENSION_TYPE}`,
	dirname: ENV.LOG.ERROR.DIR,
    zippedArchive: true,
    maxSize: '20m',
	maxFiles: '30d',
	auditFile: `${ENV.LOG.ERROR.DIR}/${ENV.LOG.ERROR.AUDIT}`
});

const InfoTransport = new (winston.transports.DailyRotateFile)
({
	name: 'info-transport',
	level: 'info',
	json: true,
	filename: `${ENV.LOG.INFO.FILENAME}-%DATE%${ENV.LOG.EXTENSION_TYPE}`,
	dirname: ENV.LOG.INFO.DIR,
    zippedArchive: true,
    maxSize: '20m',
	maxFiles: '30d',
	auditFile: `${ENV.LOG.INFO.DIR}/${ENV.LOG.INFO.AUDIT}`
});

module.exports = {
	ErrorTransport,
	InfoTransport
};