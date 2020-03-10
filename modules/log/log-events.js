/**
 * ErrorTransport event listener definition.
 */
exports.ErrorTransportEvents = (Log, ErrorTransport) => {
	ErrorTransport
		// Fired when a new log file is created.
		.on('new', (newFilename) => {
			Log.info({
				event: '[NEW]',
				message: 'Error file generated',
				file: newFilename
			});
		})
		// Fired when the log file is rotated.
		.on('rotate', (oldFilename, newFilename) => {
			Log.info({
				event: '[ROTATE]',
				message: 'Error file rotating',
				oldFile: oldFilename,
				newfile: newFilename
			});
		})
		// Fired when the log file is archived.
		.on('archive', (zipFilename) => {
			Log.info({
				event: '[ARCHIVE]',
				message: 'Error file ZIP archived',
				filename: zipFilename
			});
		})
		// Fired when a log file is removed from the file system.
		.on('logRemoved', (removedFilename) => {
			Log.info({
				event: '[LOG_REMOVED]',
				message: 'Error file removed',
				filename: removedFilename
			});
		});
};


/**
 * InfoTransport event listener definition.
 */
exports.InfoTransportEvents = (Log, InfoTransport) => {
	InfoTransport
		// Fired when a new log file is created.
		.on('new', (newFilename) => {
			Log.info({
				event: '[NEW]',
				message: 'Info file generated',
				file: newFilename
			});
		})
		// Fired when the log file is rotated.
		.on('rotate', (oldFilename, newFilename) => {
			Log.info({
				event: '[ROTATE]',
				message: 'Info file rotating',
				oldFile: oldFilename,
				newfile: newFilename
			});
		})
		// Fired when the log file is archived.
		.on('archive', (zipFilename) => {
			Log.info({
				event: '[ARCHIVE]',
				message: 'Info file ZIP archived',
				filename: zipFilename
			});
		})
		// Fired when a log file is removed from the file system.
		.on('logRemoved', (removedFilename) => {
			Log.info({
				event: '[LOG_REMOVED]',
				message: 'Info file removed',
				filename: removedFilename
			});
		});
};

