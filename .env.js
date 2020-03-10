module.exports = {

	GRAPHQL_SERVER_PORT: 42500,

	ENVIRONMENT: 'dev',

	DATABASE: {
		URL: 'mongodb://localhost:27017/box-delivery-restaurante'
	},

	LOG: {
		ERROR: {
			DIR: 'logs/error',
			FILENAME: 'boxdelivery-restaurante-errors',
			AUDIT: 'boxdelivery-restaurante-errors.audit.json'
		},
		INFO: {
			DIR: 'logs/info',
			FILENAME: 'boxdelivery-restaurante-infos',
			AUDIT: 'boxdelivery-restaurante-infos.audit.json'
		},
		EXTENSION_TYPE: '.log'
	}
}
