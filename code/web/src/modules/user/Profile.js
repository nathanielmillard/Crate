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
        <ImageTile style={{ borderRadius: '5px'}} object-fit='cover' width={300} height={300} shadow={level1} image={`${ APP_URL }/images/stock/men/1.jpg`} />
      </GridCell>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
        <p style={{ marginBottom: '0.5em' }}>{props.user.details.description || 'I\'m a trendy Crate user!'}</p>
      </GridCell>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.address || '123 West 5th St City, State 12345' }</p>
      </GridCell>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <EditProfile />
      </GridCell>
      
    </Grid>
    
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <Button theme="primary" onClick={props.loadHistory} >Order History</Button>
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
    <Grid>
    {
    props.user.history &&
          props.user.history.map(product => {
            if(product.purchased) {
            return (<GridCell key={product.id} style={{ margin: '2em', float: 'left' }}>
                <H3>{product.name}</H3>
                <p>{product.description}</p>
                <ImageTile
                  image={product.image}
                  width={250}
                  height={250}/>
              </GridCell>)
            } else {
              return (<GridCell key={product.id} style={{ margin: '2em', float: 'left' }}>
                <H3>{product.name}</H3>
                <p>{product.description}</p>
                <ImageTile
                  image={product.image}
                  width={250}
                  height={250}
                  opacity={.5}/>
              </GridCell>)
            }
          })
    }
    </Grid>
    
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  loadHistory: PropTypes.func.isRequired
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

// would love sad path handling for if a user dsn't have a history
// and if the history is loading, but currently we are mocking data
export default connect(profileState, { logout, loadHistory })(Profile)
