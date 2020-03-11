module.exports = {

	GRAPHQL_SERVER_PORT: 443,

	ENVIRONMENT: 'dev',

	DATABASE: {
		// URL: 'mongodb://localhost:27017/',
		URL: 'mongodb+srv://caioMenezes:159875300@clustercaio-plzwq.mongodb.net/box-delivery-restaurante?retryWrites=true&w=majority'
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
