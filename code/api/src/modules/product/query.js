// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { ProductType, ProductTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// Products All
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}
// the 'export' command I think allows for that 'const' to be imported (used) in another file/folder

// Product By slug
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
// Gets a product by ID
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
// Gets all products related to a specific one
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
// grabs all product types
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}
