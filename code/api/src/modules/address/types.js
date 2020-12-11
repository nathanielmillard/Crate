// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'

// Address type
const AddressType = new GraphQLObjectType({
  name: 'address',
  description: 'Address Type',

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

export default AddressType
