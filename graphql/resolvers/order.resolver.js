const Order = require('../../database/models/order.model');
const { ApolloError } = require('apollo-server');

module.exports = {

	Query: {

		getOrderById: async (_, { orderId }, ___, ____) => {
			try {
				return await Order.find({ _id: orderId });
			} catch (error) {
				return new ApolloError(error);
			}
		},

		getAllOrders: async (_, __, ___, ____) => {
			try {
				return await Order.find({});
			} catch (error) {
				return new ApolloError(error);
			}
		}
	},

	Mutation: {

		createOrder: async (_, orders, ___, ____) => {
			try {
				if(orders.order.length > 1) {
					let createdOrders = [];
					orders.order.forEach(async order => {
						let newOrder = new Order(order);
						createdOrders.push(await newOrder.save());
					});
					return createdOrders;
				} else {
					const newOrder = new Order(orders.order[0]);
					return [await newOrder.save()];
				}
			} catch (error) {
				return new ApolloError(error);
			}
		},

		updateOrder: async (_, order, ___, ____) => {
			try {
				console.log(order);
				return await Order.updateOne({ _id: order._id }, order);
			} catch (error) {
				return new ApolloError(error);
			}
		},

		deleteOrder: async (_, orders, ___, ____) => {
			try {
				console.log(orders);
				if(orders.length) return await Order.deleteMany(orders);
				else return await Order.deleteOne({ _id: orders._id });
			} catch (error) {
				return new ApolloError(error);
			}
		}
	}
};
