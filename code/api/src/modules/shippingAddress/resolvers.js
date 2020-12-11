// App Imports
import models from '../../setup/models'

// Get ShippingAddress by ID
export async function get(parentValue, { id }) {
  const shippingAddress = await models.ShippingAddress.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
    ]
  })
  if (!shippingAddress) {
    throw new Error('The shipping address you are looking for does not exist.')
  } else {
    return shippingAddress
  }
}

// Get ShippingAddress by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.ShippingAddress.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
      ]
    })
  } else {
    throw new Error('Please login to view your shipping address.')
  }
}

// Get all Shipping Addresses
export async function getAll() {
  return await models.ShippingAddress.findAll({
    include: [
      { model: models.User, as: 'user' },
    ]
  })
}

// Create Shipping Address
export async function create(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.ShippingAddress.create({
      userId: auth.user.id
    })
  } else {
    throw new Error('Please login to add shipping address.')
  }
}

// Edit Shipping Address
export async function edit(parentValue, { id, addressLineOne, addressLineTwo, city, state, zipCode, country }, { auth }) {
  return await models.ShippingAddress.update(
    {
      addressLineOne
      addressLineTwo
      city
      state
      zipCode
      country
    },
    {where: {id}}
  )
}
}
