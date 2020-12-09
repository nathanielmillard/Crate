// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  // This is a 'register user' function.
  // 'const user =' defines a variable 'user' as a SQL/GraphQL query of finding a specific User using an email. If a User isn't found, they are created (lines 20 - 24). If a User is found, an error is thrown.
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })
  // This function checks if a User of the specific email (with the corresponding password) exists. If a User isn't found, an error is thrown. If the wrong password is entered, a different error is thrown
  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// email update
export async function edit(parentValue, { id, email }) {
    return await models.User.update(
      {
        email
      },
      {where: {id}}
    )
}

// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
}
