import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

const WebJobsStyles = styled.div`
img{
    height: 200px;
    width: 40%;
}
`



class WebJobs extends Component {
    render() {
        return (
            <div>
                <WebJobsStyles>
                <h1> Web Jobs</h1>

                <h3>Full Stack Developer</h3>
                <img src="https://www.skillgigs.com/blog/wp-content/uploads/2017/02/must-ask-fullstack-developer-questions.jpg" alt="front end"/>
                <p> Salary: $70K - $150k (changes may vary depending on location)</p>
                <p> School Years: May vary depending on route</p>
                <p>Demand: Very High</p>

                <h3> User Experience Design</h3>
                <img src="http://blog.rillusion.com/wp-content/uploads/2016/03/10-reasons-user-experienceUX-design-is-important.png" alt="user expericene"/>
                <p> Salary: $60K - $110K (changes may vary depending on location)</p>
                <p>School Years: May vary depending on route </p>
                <p> Demand: High</p>


                </WebJobsStyles>
                

            </div>
        );
    }
}

export default WebJobs;