// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'

// ShippingAddress type
const ShippingAddressType = new GraphQLObjectType({
  name: 'shipping address',
  description: 'ShippingAddress Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    addressLineOne: { type: GraphQLString },
    addressLineTwo: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zipCode: { type: GraphQLInt },
    country: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ShippingAddressType
