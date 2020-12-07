//This is the primary piece of our application that will be updated
//Currently, this is where a logged in user goes to view their profile & subscriptions
  //Currently, a user:
  //Sees their name & email address that they are logged in as
  //Sees a Subscriptions button that allows them to view their subscriptions
  //Sees a logout button
//For our track, we will be updating this component (or creating a new component) to display the user's picture, profile info & order history
  //Will need to add state for controlled form that allows user to update profile info (personal description/email address/shipping address)
  //Will need onChange & onSubmit events that will update info in database, set state & rerender
  //new component likely better to keep SRP

// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'
//Will need to make sure we remember to import any new actions we create for allowing the user to upddate profile

// Component

//Profile Component: will need to add to this to display the new user profile features
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties

//Functions as a safeguard for error handling
//As we update this component, we'll need to make sure we update propTypes here
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State

//This is the mapStateToProps that connects the component to the store's state
//As we add more properties for the user, we'll need to update this function to access them
  //personal description/email address/shipping address/profile photo
// Once updated here, this component will have access to those properties in state
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
//Here, the logout action is being dispatched as part of the connect function
  //The actions that we add the trigger a reducer to update state will need to be updated here
