import React, { Component } from 'react';

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
                <h1>Hello FieldPage</h1>
            </div>
        );
    }
}

export default FieldPage;