const { gql } = require('apollo-server-express');

module.exports = gql`  

    """
        Schema Order:
        
        Define all data related to a order created by a restaurant.
    """
    type Order {

        """
            Auto generated order ID.
        """
        id: ID
        
        """
            Client cellphone number.
        """
        cellphone_number: String!

        """
            Client name.
        """
		client_name: String!

        """
            Client ZIP/CEP code.
        """
		zip_code: String!

        """
            Client address.
        """
		client_address: String!

        """
            Client address number.
        """
		address_number: String!

        """
            Client address complement.
        """
		address_complement: String

        """
            Type of delivery: 
            - Normal
            - Malote
        """
		delivery_type: String!

        """
            Payment type: 
            - Cash
            - Credit
            - Debit
            - Online
            - VR
        """
		payment: String!

        """
            Order total amount.
        """
        order_value: Float!
        
        """
            Total amount to be paid (Cash).
        """
		change_to: Float

        """
            Order observations.
        """
		observations: String

        """
            Optional: If necessary a cool box.
        """
		cool_box: Boolean

        """
            Optional: If necessary to return.
        """
		return: Boolean

        """
            Optional: If necessary a signature.
        """
		signature: Boolean

        """
            Optional: Rain.
        """
		rain: Boolean

        """
            Geolocation info.
        """
        geolocation: Geolocation!

    }

    type Geolocation {

        """
            Geolocation: Latitude.
        """
        latitude: String!


        """
            Geolocation: longitude.
        """
        longitude: String!
        
    }

    input GeolocationInput {
        
        """
            Geolocation: Latitude.
        """
        latitude: String!


        """
            Geolocation: longitude.
        """
        longitude: String!

    }

    """
        Input type definition for Order creation object.
    """
    input CreateOrderInput {

        """
            Client cellphone number.
        """
        cellphone_number: String!

        """
            Client name.
        """
		client_name: String!

        """
            Client ZIP/CEP code.
        """
		zip_code: String!

        """
            Client address.
        """
		client_address: String!

        """
            Client address number.
        """
		address_number: String!

        """
            Client address complement.
        """
		address_complement: String

        """
            Type of delivery: 
            - Normal
            - Malote
        """
		delivery_type: String!

        """
            Payment type: 
            - Cash
            - Credit
            - Debit
            - Online
            - VR
        """
		payment: String!

        """
            Order total amount.
        """
        order_value: Float!
        
        """
            Total amount to be paid (Cash).
        """
		change_to: Float

        """
            Order observations.
        """
		observations: String

        """
            Optional: If necessary a cool box.
        """
		cool_box: Boolean

        """
            Optional: If necessary to return.
        """
		return: Boolean

        """
            Optional: If necessary a signature.
        """
		signature: Boolean

        """
            Optional: Rain.
        """
		rain: Boolean

        """
            Geolocation info.
        """
        geolocation: GeolocationInput!

    }

    """
        Input type definition for Order updating object.
    """
    input UpdateOrderInput {
        
        """
            Auto generated order ID.
        """
        id: ID

        """
            Client cellphone number.
        """
        cellphone_number: String

        """
            Client name.
        """
		client_name: String

        """
            Client ZIP/CEP code.
        """
		zip_code: String

        """
            Client address.
        """
		client_address: String

        """
            Client address number.
        """
		address_number: String

        """
            Client address complement.
        """
		address_complement: String

        """
            Type of delivery: 
            - Normal
            - Malote
        """
		delivery_type: String

        """
            Payment type: 
            - Cash
            - Credit
            - Debit
            - Online
            - VR
        """
		payment: String

        """
            Order total amount.
        """
        order_value: Float
        
        """
            Total amount to be paid (Cash).
        """
		change_to: Float

        """
            Order observations.
        """
		observations: String

        """
            Optional: If necessary a cool box.
        """
		cool_box: Boolean

        """
            Optional: If necessary to return.
        """
		return: Boolean

        """
            Optional: If necessary a signature.
        """
		signature: Boolean

        """
            Optional: Rain.
        """
		rain: Boolean

        """
            Geolocation info.
        """
        geolocation: GeolocationInput

    }

    """
        Queries definition to Order Schema.
    """
    type Query {

        """
            Returns a order which has the ID specified by parameter.

            @returns null if has no orders registered.
        """
        getOrderById(orderId: ID!): Order

        """
            Returns one or more orders.

            @returns [] if has no orders registered.
        """
        getAllOrders: [Order]
        
    }

    """
        Mutations definition to Order Schema.
    """
    type Mutation {

        """
            Create one or more orders, if the operation terminated successfully all the created orders will be returned.
        """
        createOrder(order: [CreateOrderInput!]): [Order!]

        """
            Update one order and return true/false, if the operation terminated successfully/failure.

            @validation: Order ID must exist in database, if not, will return false.
        """
        updateOrder(order: UpdateOrderInput!): Boolean

        """ 
            Delete one or more orders and return true/false, if the operation terminated successfully/failure.

            @validation: Order IDs must exist in database, if not, will return false.
        """
        deleteOrder(orderIds: [ID!]): Boolean

    }

`;
