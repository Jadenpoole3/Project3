import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

const MedicalJobStyles = styled.div`
img{
    height: 200px;
    width: 40%;
}
`


class MedicalJob extends Component {
    render() {
        return (
            <div>
                <MedicalJobStyles>

                <h1> Medical Jobs</h1>
                
                <h3> Nurse Anesthetist </h3>
                <img src="http://nursinglink.monster.com/nfs/nursinglink/attachment_images/0015/8190/anesthetistnurse_crop380w.jpg?1284503282" alt="nurse anthe"/>
                <p> Salary: 100K - 150K</p>
                <p> School Years: Two - Six </p>
                <p>Demand: High</p>

                <br/>

                <h3> Surgical Technical </h3>
                <img src="https://www.allalliedhealthschools.com/wp-content/uploads/2016/09/hero-medical-technician-surgical-assistant-vs-technician.jpg" alt="nurse surge"/>
                <p> Salary: 50K - 90K</p>
                <p> School Years: Two - Four</p>
                Demand: Skyrocketing
                </MedicalJobStyles>



              

            </div>
        );
    }
}

export default MedicalJob;