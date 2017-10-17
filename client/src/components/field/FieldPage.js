import React, {Component} from 'react';
import axios from 'axios'
import { Redirect} from 'react-router-dom'

class FieldPage extends Component {
    state = {
        field: {
            title: '',
            information: '',
            createdAt: '',
        },

        redirectToField: false

    }



    async componentWillMount() {
        this.getField()
        
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
getField = async () => {
    try {
        const {
                fieldId
            } = this.props.match.params
        const response = await axios.get(`/api/users/${fieldId}`)
        this.setState({
            field: response.data
        })
    } catch (err) {
        console.log(err)
    }
}


handleDelete = async () => {
    const fieldId = this.props.match.params.fieldId
    const response = await axios.delete(`/api/fields/${fieldId}`)
    this.setState({
        redirectToField: true
    })
    // this.props.handleDelete(this.state.field._id)
}



handleChange = async (event) => {
    console.log(event)

    //getting the input 
    const attribute = event.target.name

    const clonedField = {
        ...this.state.field
    }

    this.setState({
        field: clonedField
    })
}

updateBio = async () => {
    const { fieldId} = this.props.match.params

    const res = await axios.patch(`/api/fields/${fieldId}`, {
        field: this.state.field
    })
    this.setState({
        field: res.data
    })



}
render() {
    if (this.state.redirectToField) {

        return <Redirect to={"/login"} />
    }

    return (<div>
        <h1> Users Profile </h1>
        <h3> {this.state.field.userName} </h3>
        <h3> Bio </h3>
        <textarea onBlur={this.updateBio}
            onChange={this.handleChange}
            name="bio" value={this.state.field.bio}
        />
        <h3> Field of Interest </h3>
        <h3>
            {this.state.field.fieldOfInterest} </h3>
        <br />
        <button onClick={this.handleDelete}>Delete </button>
    </div>
    )
}
    

}

export default FieldPage;