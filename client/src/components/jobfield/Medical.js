import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import MedicalJob from '../jobs/MedicalJob.js'

const MedicalStyles = styled.div`
img{
    height: 200px;
    width: 20%;
}
text-align: center,
`

class Medical extends Component {
    render() {
        return (

            <MedicalStyles>
<div>
                <h1> Medical</h1>
                <img src="https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/P104775043MPC110165765/views/1,width=300,height=300,appearanceId=1,backgroundColor=E8E8E8,version=1485256808/medical-cross-symbol-t-shirts-men-s-t-shirt.jpg" alt="medical"/>

                <h1>Nursing</h1>
                <p>Nurses save and improve lives as front line members of the health care delivery team. 
                    They independently assess and monitor patients, and taking a holistic approach, determine what patients need to attain and preserve their health. These are just some type of nursing jobs that don't require long years of school</p>

                <h3> Associate’s Degree Programs</h3>
                <p>A 2-year associate’s degree program is a solid stepping stone you can use to enter the nursing field. Upon completion of the coursework, you will be eligible to take the National Council Licensure Examination (NCLEX-RN) and apply for a registered nurse (RN) license.
                This can open doors to entry-level positions in hospitals or inpatient facilities and provide you with valuable experience.  </p>

                <h3> Bachelor's Degree Program</h3>

                <p>
                The first two years cover core requirements and the latter two years focus primarily on nursing. This degree is a good start for aspiring nurse practitioners who will eventually decide on a specialty.
                </p>

            <Link to="/jobs/MedicalJob"> Medical Jobs </Link>


                
            </div>
            </MedicalStyles>
            
        );
    }
}

export default Medical;