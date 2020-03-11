
// Apollo Server
const { ApolloServer } = require('apollo-server');

// GraphQL (Schemas|Resolvers|Subscriptions) Definitions
const OrderSchema = require('../schema/order.schema');
const OrderResolvers = require('../resolvers/order.resolver');

// Logger
const Log = require('../../modules/log/log');

// Initializing Apollo Server to serve GraphQL endpoint.
const GraphQLServer = new ApolloServer({
	typeDefs: OrderSchema,
	resolvers: OrderResolvers,
	subscriptions: {
		onConnect: (connectionParams, webSocket, context) => {
			Log.info({
				message: '[WS] Websocket onConnect event',
				params: { ...connectionParams },
				context: { ...context }
			});
		},
		onDisconnect: (webSocket, context) => {
			Log.info({
				message: '[WS] Websocket onDisconnect event',
				context: { ...context }
			});
		}
	},
	introspection: ENV.ENVIRONMENT !== 'prod', // Enables and disables schema introspection. Disabled in production by default.
	cors: true, // Pass the integration-specific CORS options: uses the defaults.
	playground: ENV.ENVIRONMENT !== 'prod', // Enables and disables Apollo Server Playground. Disabled in production by default.
	debug: ENV.ENVIRONMENT !== 'prod', // Enables and disables GraphQL Server debug option. Disabled in production by default.
	formatError: ({ message, path, extensions }) => {
		const format = {
			message,
			code: extensions.code,
			path
		};
		Log.error({ ...format });
		return format;
	}
});

module.exports = GraphQLServer;



