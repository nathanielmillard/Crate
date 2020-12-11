// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { AddressType } from './types'
import { get, getAll, getByUser } from './resolvers'

// All
export const addresses = {
  type: new GraphQLList(AddressType),
  resolve: getAll
}

// By User
export const addressByUser = {
  type: new GraphQLList(AddressType),
  resolve: getByUser
}

//By ID
export const address = {
  type: AddressType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
