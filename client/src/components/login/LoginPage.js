import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import {Redirect} from 'react-router-dom'

class LoginPage extends Component {
    state = {
        users: [],
        fields: []
    }

    static defaultProps = {
        match: {
            path: '',
        }
    }
    componentWillMount () {
        this.getAllUsers()
    } 
    getAllUsers = async () => {
        const res = await axios.get('/api/users')
        this.setState({users: res.data})
   
    }

    getAllFields = async () => {
        const res = await axios.get('/api/fields')
        this.setState({fields: res.data})
    }

    updateUser = async (newUser) => {
        const res = await axios.post('/api/users', {
            "user": newUser
        })
        const clonedusers = [...this.state.users]
        clonedusers.push(res.data)
        this.setState({users: clonedusers})
    }
    

    render() {
        return (
            <div>
                <h1>  Login</h1>
                <h3> Please Select an Existing User</h3>
                {this.state.users.map(user => {
                    return (<Link key={user._id} to={`/user/${user._id}`}>{user.userName}</Link>)
                    return <Redirect to ={"/login"} />
                })}

                
                {this.props.match.path === "/login" ? <SignUpForm updateUser={this.updateUser}/> : null}
            </div>
           
        );
    }
}

export default LoginPage;