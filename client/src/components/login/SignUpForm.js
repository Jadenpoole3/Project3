import React, { Component } from 'react'
import axios from 'axios'
import TextField from 'material-ui/TextField';


class SignUpForm extends Component {
    state = {
        newUser: {
            userName: '',
            bio: '',
            img: ''
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name 
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.newUser)
    }
       
    render () {
        return (
            <div>
                <h1> Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input  
                        onChange={this.handleChange}
                        name="userName" type="text"  value={this.state.newUser.userName}/>
                    </div>
                    <div>
                        <label htmlFor="bio">Bio</label>
                        <input 
                        onChange={this.handleChange}
                        value={this.state.newUser.bio}
                        name="bio" type="text" 
                        required
                        />

                    </div>

                    <div>
                        <label htmlFor="img">Image</label>
                        <input  
                        onChange={this.handleChange}
                        name="img" type="text"  value={this.state.newUser.img}/>
                    </div>

                    <div>
                        <label htmlFor="fieldOfInterest">Field Of Interest</label>
                        <input  
                        onChange={this.handleChange}
                        name="fieldOfInterest" type="text"  value={this.state.newUser.fieldOfInterest}/>
                    </div>
                    <button> Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm