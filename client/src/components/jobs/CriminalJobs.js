import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

const CriminalJobsStyles = styled.div`
img{
    height: 200px;
    width: 40%;
}
`



class CriminalJobs extends Component {
    render() {
        return (
            <div>
                <h1> Criminal Justice Jobs</h1>

                <CriminalJobsStyles>

                <h3> Detectives </h3>
                <img src="https://fthmb.tqn.com/aoGc6_Quft4LiJ0ndIQNvsMBoBA=/768x0/filters:no_upscale()/108274132-56a1e29d5f9b58b7d0c44037.jpg" alt="detective"/>
                <p>Salary: $70K - $110K (changes may vary depending on location)</p>
                <p>School Years: 1-2 </p>
                <p>Demand: Growing</p>

                <h3> Police Officer </h3>
                <img src="https://www.drugrehab.com/wp-content/themes/dr/images/police/image-protecting.png" alt="cops"/>
                <p> Salary: $45K - $70K</p>
                <p> School Years: 1</p>
                <p>Demand: High</p>
                </CriminalJobsStyles>

                

            </div>
        );
    }
}

export default CriminalJobs;