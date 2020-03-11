const Schema = require('mongoose').Schema;
const Model = require('mongoose').model;

const OrderSchema = new Schema({

		cellphone_number: {
			type: String,
			required: true,
			trim: true
		},

		client_name: {
			type: String,
			required: true,
			trim: true
		},

		zip_code: {
			type: String,
			required: true,
			trim: true
		},

		client_address: {
			type: String,
			required: true,
			trim: true
		},

		address_number: {
			type: String,
			required: true,
			trim: true
		},

		address_complement: {
			type: String,
			trim: true
		},

		delivery_type: {
			type: String,
		},

		payment: {
			type: String,
			required: true
		},

		order_value: {
			type: Number,
			required: true
		},

		change_to: {
			type: Number
		},

		observations: {
			type: String,
			trim: true
		},

		cool_box: {
			type: Boolean,
			default: false
		},

		return: {
			type: Boolean,
			default: false
		},

		signature: {
			type: Boolean,
			default: false
		},

		rain: {
			type: Boolean,
			default: false
		},

		geolocation: {

			latitude: {
				type: String,
				required: true,
				trim: true
			},

			longitude: {
				type: String,
				required: true,
				trim: true
			}
		}
	}, 
	
	{ timestamps: true }
);

module.exports = Model('Order', OrderSchema);
