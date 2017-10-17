import React, { Component } from 'react';
import styled from 'styled-components'
import Medical from '../jobfield/Medical'
import Web from '../jobfield/Web.js'
import Criminal from '../jobfield/Criminal'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const FieldStyles = styled.div`
img{
    height: 200px;
    width: 40%;
}
`


class Field extends Component {
    render() {
        return (
            <div>
                <FieldStyles>

                <h1> Fields </h1>

                <h3><Link to="/jobfield/medical">Medical</Link></h3>

                <img src="https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/P104775043MPC110165765/views/1,width=300,height=300,appearanceId=1,backgroundColor=E8E8E8,version=1485256808/medical-cross-symbol-t-shirts-men-s-t-shirt.jpg" alt="medical"/>
                <br/>

                <h3> <Link to="/jobfield/web">Web Development</Link></h3>
                <img src="https://www.eduonix.com/aDmiN_050716/public/uploads/headerimages/20170301155447.jpg" alt="web"/>

                <h3> <Link to="/jobfield/criminal">Criminal Justice</Link></h3>
                <img src="https://www.criminaljusticedegreeschools.com/wp-content/themes/p8-theme/img/criminal-justice-schools-montage.jpg" alt="criminal"/>



            </FieldStyles>
            </div>
        );
    }
}

export default Field;

// const Field = (props) => {
//     const deleteField = () => {
//         props.deleteField(props._id)
//     }

//     const handleChange = (event) => {
//         props.handleChange(event, props._id)
//     }

//     const updateField = () => {
//         props.updateField(props._id)
//     }

    
    



