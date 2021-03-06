import React, {Component} from 'react';
import axios from 'axios'
import { Redirect} from 'react-router-dom'

class UserPage extends Component {
    state = {
        user: {
            userName: '',
            bio: '',
            img: '',
            fieldOfInterest: '',
        },


        redirectToUser: false

    }



    async componentWillMount() {
        this.getUser()
        
    }

//     getfield = async () => {
//         try {
//             const {
//                 fieldId
//             } = this.props.match.params
//             const response = await axios.get(`/api/fields/${fieldId}`)
//             this.setState({
//                 field: response.data
//             })
//         } catch (err) {
//             console.log(err)
//         }
// }
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


handleDelete = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.delete(`/api/users/${userId}`)
    this.setState({
        redirectToField: true
    })
    // this.props.handleDelete(this.state.field._id)
}



handleChange = async (event) => {
    console.log(event)

    //getting the input 
    const attribute = event.target.name

    const clonedUser = {...this.state.user }
    clonedUser[attribute] = event.target.value

    this.setState({ user: clonedUser})
}

updateBio = async () => {
    const { userId} = this.props.match.params

    console.log(userId + ' is being sent')
    const res = await axios.patch(`/api/users/${userId}`, {
        user: this.state.user
    })
    this.setState({
        user: res.data
    })



}
render() {
    if (this.state.redirectToField) {

        return <Redirect to={"/login"} />
    }

    return (<div>
        <h1> Users Profile </h1>
        <h3> {this.state.user.userName} </h3>
        <h3> Bio </h3>
        <textarea onBlur={this.updateBio}
            onChange={this.handleChange}
            name="bio" value={this.state.user.bio}
        />
        <h3> Field of Interest </h3>
        <h3>{this.state.user.fieldOfInterest} </h3>
        <br />
        <button onClick={this.handleDelete}>Delete </button>
    </div>
    )
}
    

}

export default UserPage;