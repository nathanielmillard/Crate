import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUserInfo } from './api/actions'

// UI Imports
import ImageTile from '../../ui/image/Tile'
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import Input from '../../ui/input/Input'
import { grey, grey2 } from '../../ui/common/colors'
import { level1 } from '../../ui/common/shadows'


class EditProfile extends Component {
    constructor(props) {
        super()
        this.state = {
            //image: ?
            name: '',
            description: '',
            email: '',
            address: ''
        }
    }

    handleUserInput = (event) => {
        this.setState( { [event.target.name]: event.target.value } )
    }

    updateUser = (event) => {
      event.preventDefault()
      this.props.updateUserInfo(this.state)
    }

    render() {
        return(
            <form style={{ padding: '2em', textAlign: 'center' }}>
                <Input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={this.state.name}
                    onChange={event => this.handleUserInput(event)}
                />
                <Input
                    type='text'
                    name='description'
                    placeholder='description'
                    value={this.state.description}
                    onChange={event => this.handleUserInput(event)}
                />
                <Input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={this.state.email}
                    onChange={event => this.handleUserInput(event)}
                />
                <Input
                    type='text'
                    name='address'
                    placeholder='address'
                    value={this.state.address}
                    onChange={event => this.handleUserInput(event)}
                />
                <Button theme="primary" style={{ marginLeft: '1em' }} type='button' onClick={this.updateUser}>Submit</Button>
                {/* onClick, will need to dispatch action*/}
            </form>
        )
    }
}

// Component State
function editProfileState(state) {
    return {
      user: state.user
    }
  }

export default connect(editProfileState, {updateUserInfo})(EditProfile)
