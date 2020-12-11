// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { AddressType } from './types'
import { create, edit } from './resolvers'

// Create
export const addAddress = {
  type: AddressType,
  args: {
    //not sure if this is needed or it is inherent when filling out form
    //we probably need to make it inherent.
    userId: {
      name: 'userId',
      type: GraphQLInt
    },

    addressLineOne: {
      name: 'addressLineOne',
      type: GraphQLString
    },

    addressLineTwo: {
      name: 'addressLineTwo',
      type: GraphQLString
    },

    city: {
      name: 'city',
      type: GraphQLString
    },

    state: {
      name: 'state',
      type: GraphQLString
    },

    zipCode: {
      name: 'zipCode',
      type: GraphQLString
    },

    country: {
      name: 'country',
      type: GraphQLString
    }
  },
  resolve: create
}

// Edit
export const editAddress = {
  type: AddressType,
  args: {
    addressLineOne: {
      name: 'addressLineOne',
      type: GraphQLString
    },

    addressLineTwo: {
      name: 'addressLineTwo',
      type: GraphQLString
    },

    city: {
      name: 'city',
      type: GraphQLString
    },

    state: {
      name: 'state',
      type: GraphQLString
    },

    zipCode: {
      name: 'zipCode',
      type: GraphQLString
    },

    country: {
      name: 'country',
      type: GraphQLString
    },
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: edit
}
