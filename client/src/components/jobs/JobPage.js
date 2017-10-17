import React, {Component} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'



class JobPage extends Component {
    async componentWillMount () {
        this.getUser() 
    }

    getUser = async () => {
    try {
        const {userId} = this.props.match.params
        const response = await axios.get(`/api/users/${userId}`)
        this.setState({user: response.data})
    } catch (err) {
        console.log(err)
    }
        }
    
  
    render() {
        if(this.state.user.userName) {
            return <Redirect to ={"/field"} />
        }
        return (
            <div>

                <h3>{this.state.user.userName}</h3>

                
                
            </div>
        );
    }
}

export default JobPage;