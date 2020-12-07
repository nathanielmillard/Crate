// Imports
// This is where we 'import' or allow these GraphQL types to be allowed/accepted
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// User type
//This defines all of the User attributes entered into the database
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Login type
//This defines all of the Login credentials needed to login and states where the fields come from.
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})
//This allows us to use all off the above data throughout the project and in the database.
export { UserType, UserLoginType, UserGenderType }
