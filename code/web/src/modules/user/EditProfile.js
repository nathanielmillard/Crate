import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUserInfo } from './api/actions'

// UI Imports

import Button from '../../ui/button'
import Input from '../../ui/input/Input'



class EditProfile extends Component {
    constructor(props) {
        super()
        this.state = {
            //image: ?
            name: props.user.details.name || '',
            description: props.user.details.description || '',
            email: props.user.details.email || '',
            address: props.user.details.address || ''
        }
    }

    handleUserInput = (event) => {
        this.setState( { [event.target.name]: event.target.value } );
        this.setState({value: e.target.value })
    }

    updateUser = (event) => {
      event.preventDefault()
      this.props.updateUserInfo(this.state)
    }
    
    showEditInfo = () => {
        //this is the function that will show and hide the menu
    }

    render() {
        return(
            <div>
                <Button onClick='showEditInfo' theme='secondary'>Edit Info</Button>
                <form style={{ padding: '2em', textAlign: 'center', width: '25em', margin: '0 auto' }}>
                    <Input
                        type='text'
                        name='name'
                        placeholder={this.props.user.details.name || 'name'}
                        value={this.state.name}
                        onChange={event => this.handleUserInput(event)}
                    />
                    <Input
                        type='text'
                        name='description'
                        placeholder={this.props.user.details.description || 'description'}
                        value={this.state.description}
                        onChange={event => this.handleUserInput(event)}
                    />
                    <Input
                        type='text'
                        name='email'
                        placeholder={this.props.user.details.email || 'email'}
                        value={this.state.email}
                        onChange={event => this.handleUserInput(event)}
                    />
                    <Input
                        type='text'
                        name='address'
                        placeholder={this.props.user.details.address || 'address'}
                        value={this.state.address}
                        onChange={event => this.handleUserInput(event)}
                    />
                    <Button theme="primary" style={{ marginTop: '1em' }} type='submit' onClick={this.updateUser}>Submit</Button>
                    {/* onClick, will need to dispatch action*/}
                </form>
            </div>
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
