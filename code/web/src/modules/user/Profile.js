// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


// UI Imports
import ImageTile from '../../ui/image/Tile'
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'
import { level1 } from '../../ui/common/shadows'

// App Imports
import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { logout, loadHistory } from './api/actions'
import EditProfile from './EditProfile'

// Component
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
        {/*<Tile style={{}} image={icon}></Tile>*/}
        <ImageTile width={300} height={530} shadow={level1} image={`${ APP_URL }/images/stock/men/1.jpg`} />
      </GridCell>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
        <p style={{ marginBottom: '0.5em' }}>Personal description goes here</p>
        {/*Description text should be dynamic from user details ie props.user.details.description */}
      </GridCell>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        <p style={{ color: grey2, marginBottom: '2em' }}>123 West 5th St City, State 80654</p>
        {/*Address text should be dynamic from user details ie props.user.details.shipping */}
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <Button theme="primary" onClick={props.loadHistory} >Order History</Button>
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
        <Button theme="primary" style={{ marginLeft: '1em' }}>Edit Info</Button>
      </GridCell>
    </Grid>
    <Grid>
    {
    props.user.history &&
          props.user.history.map(product => (
            <GridCell key={product.id} style={{ margin: '2em', float: 'left' }}>
            <H3>{product.name}</H3>
            <p>{product.description}</p>
            {/* Items will also have a boolean value to indicate if item was kept */}
            {/* Render image with opacity based on boolean value */}
            </GridCell>
          ))
    }
    </Grid>
    <EditProfile />
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  loadHistory: PropTypes.func.isRequired
  //loadHistory will be required once that functionality is written
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

// {
//   props.user.history.length = 0 &&
//   <EmptyMessage message="You have not received any crate orders yet." />
// }

// would lve sad path handling for if a user dsn't have a history
// and if the history is loading, but currently we are mocking data
export default connect(profileState, { logout, loadHistory })(Profile)
