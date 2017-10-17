import React, {
    Component
} from 'react';
import axios from 'axios'
import {
    Redirect
} from 'react-router-dom'

class FieldPage extends Component {
    state = {
        user: {
            userName: '',
            bio: '',
            fields: []
        },
        redirectToUser: false

    }



    async componentWillMount() {
        this.getUser()
        // this.getField()
    }

    getUser = async () => {
        try {
            const {
                userId
            } = this.props.match.params
            const response = await axios.get(`/api/users/${userId}`)
            this.setState({
                user: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
    getField = async () => {
        try {
            const {
                fieldId
            } = this.props.match.params
            const response = await axios.get(`/api/fields/${fieldId}`)
            this.setState({
                field: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }


    handleDelete = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.delete(`/api/users/${userId}`)
        this.setState({
            redirectToUser: true
        })
        // this.props.handleDelete(this.state.user._id)
    }



    handleChange = async (event) => {
        console.log(event)

        //getting the input 
        const attribute = event.target.name

        const clonedUser = {
            ...this.state.user
        }

        this.setState({
            user: clonedUser
        })
    }

    updateBio = async () => {
        const {
            userId
        } = this.props.match.params

        const res = await axios.patch(`/api/users/${userId}`, {
            user: this.state.user
        })
        this.setState({
            user: res.data
        })



    }
    render() {
        if (this.state.redirectToUser) {

            return <Redirect to={
                "/login"
            }
            />
        }

        return (<div>
            <h1> User Profile </h1>
            <h3> {this.state.user.userName} </h3>
            <h3> Bio </h3>
            <textarea onBlur={
                                this.updateBio
                            }
                            onChange={
                                this.handleChange
                            }
                            name="bio"
                            value={
                                this.state.user.bio
                            }
                        />
                        <h3> Field of Interest </h3>
                        <h3> {
                                    this.state.user.fields
                                } </h3>
                                <br/>
            <button onClick={this.handleDelete}>Delete </button>
                                    </div>
        );
    }
}

export default FieldPage;