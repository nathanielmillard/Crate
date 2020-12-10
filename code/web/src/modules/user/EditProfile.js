import React, { Component } from 'react'
import { connect } from 'react-redux'



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

    render() {
        return(
            <form>
                <input
                    type='text'
                    placeholder='name'
                    value={this.state.name}
                    //onChange
                />
                <input
                    type='text'
                    placeholder='description'
                    value={this.state.description}
                    //onChange
                />
                <input
                    type='text'
                    placeholder='email'
                    value={this.state.email}
                    //onChange
                />
                <input
                    type='text'
                    placeholder='address'
                    value={this.state.address}
                    //onChange
                />
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

export default connect(editProfileState)(EditProfile)