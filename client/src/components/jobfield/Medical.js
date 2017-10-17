import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const MedicalStyles = styled.div`
img{
    height: 200px;
    width: 40%;
}
`

class Medical extends Component {
    render() {
        return (

            <MedicalStyles>
<div>
                <h1> Medical</h1>
                <img src="https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/P104775043MPC110165765/views/1,width=300,height=300,appearanceId=1,backgroundColor=E8E8E8,version=1485256808/medical-cross-symbol-t-shirts-men-s-t-shirt.jpg" alt="medical"/>

                <h3>Nurse </h3>
                <p>Though schools may offer the same program, they will usually differ slightly. Some might feature more lab requirements while others may focus on real-world experience and testing. Below is a list of common classes.</p>

            <Link to="./jobs/MedicalJob.js"/>


                
            </div>
            </MedicalStyles>
            
        );
    }
}

export default Medical;