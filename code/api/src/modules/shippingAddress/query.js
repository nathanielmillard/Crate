// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { ShippingAddressType } from './types'
import { get, getAll, getByUser } from './resolvers'

// All
export const shippingAddresses = {
  type: new GraphQLList(ShippingAddressType),
  resolve: getAll
}

// By User
export const shippingAddressByUser = {
  type: new GraphQLList(ShippingAddressType),
  resolve: getByUser
}

//By ID
export const shippingAddress = {
  type: ShippingAddressType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
