// App Imports
import models from '../../setup/models'

// Get ShippingAddress by ID
export async function get(parentValue, { id }) {
  const address = await models.Address.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
    ]
  })
  if (!address) {
    throw new Error('The  address you are looking for does not exist.')
  } else {
    return address
  }
}

// Get Address by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Address.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
      ]
    })
  } else {
    throw new Error('Please login to view your address.')
  }
}

// Get all  Addresses
export async function getAll() {
  return await models.Address.findAll({
    include: [
      { model: models.User, as: 'user' },
    ]
  })
}

// Create  Address
export async function create(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Address.create({
      userId: auth.user.id
    })
  } else {
    throw new Error('Please login to add address.')
  }
}

// Edit  Address
export async function edit(parentValue, { id, addressLineOne, addressLineTwo, city, state, zipCode, country }, { auth }) {
  return await models.Address.update(
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
