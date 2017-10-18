import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const WebStyles = styled.div`
img{
    height: 200px;
    width: 40%;
}
`

class Web extends Component {
    render() {
        return (
            <WebStyles>
        <div>
                <h1>Web Designer</h1>
                <hr/>
                <img src="https://www.eduonix.com/aDmiN_050716/public/uploads/headerimages/20170301155447.jpg" alt="web"/>

                
                <h1>Web Developer</h1>
                <p>A web designer is someone who is both creative and technically inclined, and uses both these attributes to build or redesign websites. </p>

                <hr/>

                <h3>Bootcamps </h3>
                <p> To Be A Web Developer you don't necessarily have to go to college to earn a Computer Science Degree.
                Most bootcamps are 3 to 6 months long.So within a 4 year window, a bootcamp student will have the opportunity to graduate from bootcamp and work 3 years at an average salary of ~$65,000 per year.
                Meanwhile, a college student will still be in school within the same time frame, or just about to graduate.
                According to a survey in 2016 by Stack Overflow, 69% of developers in the industry are allegedly self-taught and don’t have CS degrees. That’s 2 out of every 3 developers!
                </p>
                <h3> CS Degree</h3>
                <p>
                CS programs are in high-demand and are often very difficult to get into—sometimes the hardest major on campus, depending on your school. 
                The average GPA required to apply is between 3.6 to 4.0 GPA at most top universities.CS programs are designed to turn you into a Computer Scientist or Engineer, someone with a deep understanding of how computers work. 
                And with this knowledge you have multiple career paths to choose from. 
                </p>
                <br/>
                <h1>User Experience Designer</h1>
                <p> UX designers interact with clients and customers to design and get feedback on their experience using a product or tool. They usually participate in research, concept design and wireframing.</p>
                <hr/>

                <h3>Bootcamps </h3>
                <p>This bootcamp aims to demystify UX by giving a practical and simple introduction to what UX is, while also explaining some of its core concepts. 
                    This is a field that affects all areas of business — prepare to dip your toes into an ocean of new concepts and ideas that will enlighten your perspective on user experience.</p>


            </div>
            </WebStyles>
            
        );
    }
}

export default Web;