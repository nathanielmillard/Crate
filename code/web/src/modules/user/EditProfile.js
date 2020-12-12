import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUserInfo } from './api/actions'

// UI Imports

import Button from '../../ui/button'
import Input from '../../ui/input/Input'
import { grey, grey2 } from '../../ui/common/colors'



class EditProfile extends Component {
    constructor(props) {
        super()
        this.state = {
            shown: false,
            //image: ?
            name: props.user.details.name || '',
            description: props.user.details.description || '',
            email: props.user.details.email || '',
            address: props.user.details.address || ''
        }
    }

    handleUserInput = (event) => {
        this.setState( { [event.target.name]: event.target.value } );
        this.setState({ value: event.target.value })
    }

    updateUser = (event) => {
      event.preventDefault()
      this.props.updateUserInfo(this.state)
    }

    showEditInfo = () => {
        if (this.state.shown === true) {
            this.setState({ shown: false })
        } else {
            this.setState({ shown: true }) 
        }
       
    }

    render() {
        const showing = this.state.shown;
        return(
            
            <div>
                <Button onClick={this.showEditInfo} theme='secondary' style={{margin: '1em auto'}}>Edit My Info</Button>
                <form style={{ display: (showing === true ? 'block' : 'none'), padding: '2em', textAlign: 'center', width: 'auto', margin: '0 auto', backgroundColor: grey, borderRadius: '5px' }}>
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
                    <Button  theme='secondary' style={{ marginTop: '1em' }} type='submit' onClick={this.updateUser}>Submit</Button>
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
