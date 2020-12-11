// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
<<<<<<< HEAD
import { create, remove, edit } from './resolvers'
=======
import { create, remove } from './resolvers'
// The 'import' commands above import functions & variables from other files/folders
>>>>>>> 0667a8c... Create a markdown file to describe which files will need to be updated/changed for the specific track. Also adds annotations to each file that will be updated/changed to describe what the file is currently doing

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
