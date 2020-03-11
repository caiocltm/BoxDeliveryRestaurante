// Global Environment variables
global.ENV = require('./.env');

// Apollo Server
const GraphQLServer = require('./graphql/server/graphql.server');

// MongoDB instance
const MongoDB = require("./database/mongodb");

// Logger
const Log = require('./modules/log/log');

// Initializing Mongoose (MongoDB) connection, sync and starting the apollo server.
MongoDB.connect(ENV.DATABASE.URL)
.then(async () => {
	console.info(`Connected to MongoDB Server: ${ENV.DATABASE.URL}`);
	GraphQLServer.listen(ENV.GRAPHQL_SERVER_PORT)
	.then(({url, subscriptionsUrl }) => {
		console.info(`GraphQLServer ready at ${url}graphql`);
		console.info(`GraphQLServer subscriptions ready at ${subscriptionsUrl}`);
	})
	.catch(error => 
		Log.error({
			message: 'MongoDB Error',
			error: { ...error }
		})
	);
})
.catch(error => 
	Log.error({
		message: 'Mongoose Error',
		error: { ...error }
	})
);

