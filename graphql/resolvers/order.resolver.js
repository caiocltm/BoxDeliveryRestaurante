const { ApolloError } = require('apollo-server');
const Order = require('../../database/models/order.model');

module.exports = {

	Query: {

		getOrderById: async (_, { orderId }, ___, ____) => {
			try {
				return await Order.findOne({ _id: orderId });
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
					const newOrders = await Order.insertMany(orders.order);
					return newOrders.map(order => {
						return {
							id: order._id,
							...order._doc
						};
					});
				} else {
					const newOrder = await new Order(orders.order[0]).save();
					return [{
						id: newOrder._id,
						...newOrder._doc
					}];
				}
			} catch (error) {
				return new ApolloError(error);
			}
		},

		updateOrder: async (_, { order }, ___, ____) => {
			try {
				let orderUpdated = await Order.findOneAndUpdate({ _id: order.id }, order, { new: true });
				if(orderUpdated) return true;
				else return false;
			} catch (error) {
				return new ApolloError(error);
			}
		},

		deleteOrder: async (_, { orderIds }, ___, ____) => {
			try {
				if(orderIds.length > 1) {
					let result = await Order.deleteMany({ _id: orderIds });	
					return result.ok === 1 && result.deletedCount > 0 ? true : false;
				} else {
					let result = await Order.deleteOne({
						_id: (orderIds instanceof Array ? orderIds[0] : orderIds)
					});
					return result.ok === 1 && result.deletedCount > 0 ? true : false;
				}  
			} catch (error) {
				return new ApolloError(error);
			}
		}
	}
};
