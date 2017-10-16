import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import {Redirect} from 'react-router-dom'

class LoginPage extends Component {
    state = {
        users: []
    }
    componentWillMount () {
        this.getAllUsers()
    } 
    getAllUsers = async () => {
        const res = await axios.get('/api/users')
        this.setState({users: res.data})
   
    }
    
    // deleteUsers = async () => {
    //     try {
    //         await axios.delete(`/api/users/${userId}`);
    //         this.setState({})
    //     } catch (err) {
    //         res.send(err)
    //     }
        
    // }
    render() {
        return (
            <div>
                <h1>  Login</h1>
                <h3> Please Select an Existing User</h3>
                {this.state.users.map(user => {
                    return (<Link key={user._id} to={`/field/${user._id}`}>{user.userName}</Link>)
                    return <Redirect to ={"/login"} />
                })}
                <SignUpForm />
            </div>
           
        );
    }
}

export default LoginPage;