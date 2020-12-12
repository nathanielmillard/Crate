import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUserInfo } from './api/actions'


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
            <form>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={this.state.name}
                    onChange={event => this.handleUserInput(event)}
                />
                <input
                    type='text'
                    name='description'
                    placeholder='description'
                    value={this.state.description}
                    onChange={event => this.handleUserInput(event)}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={this.state.email}
                    onChange={event => this.handleUserInput(event)}
                />
                <input
                    type='text'
                    name='address'
                    placeholder='address'
                    value={this.state.address}
                    onChange={event => this.handleUserInput(event)}
                />
                <button type='button' onClick={this.updateUser}>Submit</button>
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
