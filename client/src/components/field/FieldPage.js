import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class FieldPage extends Component {
    state = {
        user: {
            userName: '',
            bio: '',
            fields: []
        },
        redirectToUser: false
    }

    

    async componentWillMount () {
        this.getUser() 
    }

    getUser = async () => {
try{
    const {userId} = this.props.match.params
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({user: response.data})
} catch (err) {
    console.log(err)
}
    }

    handleDelete = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.delete(`/api/users/${userId}`)
        this.setState({redirectToUser: true})
        // this.props.handleDelete(this.state.user._id)
    }
    render() {
        if(this.state.redirectToUser) {
            return <Redirect to ={"/login"} />
        }
        
        return (
            <div>
                <h1>Hello User</h1>

                <h3> {this.state.user.userName}</h3>

                <h3> Profile</h3>
                  <p> bio:
                      
                  </p>
                

                <button onClick={this.handleDelete}> Delete</button>
                <button>Edit</button>
            </div>
        );
    }
}

export default FieldPage;