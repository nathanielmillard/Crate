// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove, edit } from './resolvers'
// The 'import' commands above import functions & variables from other files/folders

// Create
// This is where the action of User.create is defined. If 'User.create' is called in the project, the following code is executed, requiring the 'args' to not be null:
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
// This is the command that is called when the code 'User.remove' is made
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

export const userEmail = {
  type: UserType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: edit
}
