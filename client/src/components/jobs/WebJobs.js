import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const styles = {
    card: {
        margin: 'auto',
        width: 650,


    }
}



class WebJobs extends Component {
    render() {
        return (
            <div style={styles.card} >


                <Card>
                    <CardHeader
                        title="Web Jobs"
                        subtitle="Full Stack Developer"
                        avatar="https://www.skillgigs.com/blog/wp-content/uploads/2017/02/must-ask-fullstack-developer-questions.jpg" alt="front end"
                    />
                    <CardMedia
                        overlay={<CardTitle title="Web Jobs" subtitle="Full Stack Developer" />}
                    >
                        <img src="https://www.skillgigs.com/blog/wp-content/uploads/2017/02/must-ask-fullstack-developer-questions.jpg" alt="front end" alt="nurse" />
                    </CardMedia>
                    <CardTitle title="Web Jobs" subtitle="Full Stack Developer " />
                    <CardText>
                        Salary: $70K - $150k (changes may vary depending on location)
    School Years: May vary depending on route
    Demand: Very High
    </CardText>
                    {/* <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions> */}


    
                </Card>

                <Card>
                    <CardHeader
                        title="Web Jobs"
                        subtitle="User Experience Design"
                        avatar="http://blog.rillusion.com/wp-content/uploads/2016/03/10-reasons-user-experienceUX-design-is-important.png" alt="front end"
                    />
                    <CardMedia
                        overlay={<CardTitle title="Web Jobs" subtitle="User Experience Design" />}
                    >
                        <img src="http://blog.rillusion.com/wp-content/uploads/2016/03/10-reasons-user-experienceUX-design-is-important.png" alt="front end" alt="nurse" />
                    </CardMedia>
                    <CardTitle title="Web Jobs" subtitle="User Experience Design " />
                    <CardText>
                    Salary: $60K - $110K (changes may vary depending on location)
                    School Years: May vary depending on route
                    Demand: Very High
    </CardText>
                    {/* <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions> */}
                </Card>


            </div>
        );
    }
}

export default WebJobs;