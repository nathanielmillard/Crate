//****Annotate Me*****
//This page controls what is rendered for a User's Profile

// Imports
//These imports specifically deal with packages
//and allow us to use the technologies we want in the project
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
// This imports are functional recycled elements that will only be
// rendered and don't perform logic but rather just whats displayed
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
//These are imports of functionality written for and in the context of
// this app and what it needs to be able to do
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
//This is the basic component this entire file is build for: The User Profile
const Profile = (props) => (
  <div>
    {/* SEO */}
    {/* This allows for the component itself to alter what is inside the head */}
    {/* Changing the title for the page being rendered, and allowing for better */}
    {/* readability, continuity, search engine optimization, and navigation */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    {/* This creates a one cell grid with the title of My Profile so a user knows */}
    {/* where they are in the app */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>
    {/* This is the contents of the user's profile rendered as a single cell grid*/}
    {/* containing a h4 with the user's name, a paragraph eith their email*/}
    {/* a link to their subscriptions and a log out button*/}
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
//this shows that when a profile component is rendered, it requres a log out
// function and an object containing all the user's information
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
//this function sets the current state to contain the user we want to display
// and who's details are being rendered in the profile component.
function profileState(state) {
  return {
    user: state.user
  }
}

//This allows for the exportation of this component so other files can render it
// but also connect the Profile comonent to the Store
// the connect is taking logout action imported aboveand the profile state function
// being defined in the file on line 77
export default connect(profileState, { logout })(Profile)
