const winston = require('winston');

// Getting definitions of winston available transports (Info, Error).
const { InfoTransport, ErrorTransport } = require('./log-transport');

// Winston rotating files logging events listeners.
const { ErrorTransportEvents, InfoTransportEvents } = require('./log-events'); 
 
// Creating Winston logger instance.
const Logger =  new winston.Logger({
					transports: [
						InfoTransport,
						ErrorTransport
					]
				});

// Defining error transport event listeners.
ErrorTransportEvents(Logger, ErrorTransport);

// Defining info transport event listeners.
InfoTransportEvents(Logger, InfoTransport);

module.exports = Logger;