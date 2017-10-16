import React, { Component } from 'react';
import axios from 'axios'

class FieldPage extends Component {
    state = {
        user: {
            userName: '',
            password: '',
            fields: []
        }
    }

    async componentWillMount () {
        const { userId} = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }
    render() {
        return (
            <div>
                <h1>Hello User</h1>

                <h3> UserName </h3>

                <h3> Profile</h3>
                <p>
                Lorem ipsum dolor sit amet, maiores ornare ac fermentum, 
                imperdiet ut vivamus a, nam lectus at nunc. 
                Quam euismod sem, semper ust erat dui tempor, fusce tortor auctor vestibulum.
                 Venenatis praesent risus orci, ante nam volutpat erat. Cursus non mollis interdum maecenas, 
                 consequat imperdiet penatibus enim, tristique luctus tellus eos accumsan, ridiculus erat laoreet nunc.
                </p>

                <button> Delete</button>
                <button>Edit</button>
            </div>
        );
    }
}

export default FieldPage;