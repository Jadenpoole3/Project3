import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';




const styles = {
    card: {
        margin: 'auto',
        width: 650,
    }
}

class CriminalJobs extends Component {
    render() {
        return (
            <div style={styles.card} >



<Card>
                    <CardHeader
                        title="Criminal Justice Jobs"
                        subtitle="Detectives"
                        avatar="https://fthmb.tqn.com/aoGc6_Quft4LiJ0ndIQNvsMBoBA=/768x0/filters:no_upscale()/108274132-56a1e29d5f9b58b7d0c44037.jpg" alt="detective" alt="front end"
                    />
                    <CardMedia
                        overlay={<CardTitle title="Criminal Justice Jobs" subtitle="Detectives" />}
                    >
                        <img src="https://fthmb.tqn.com/aoGc6_Quft4LiJ0ndIQNvsMBoBA=/768x0/filters:no_upscale()/108274132-56a1e29d5f9b58b7d0c44037.jpg" alt="detective" alt="front end" alt="nurse" />
                    </CardMedia>
                    <CardTitle title="Criminal Justice Jobs" subtitle="Detectives " />
                    <CardText>
                    Salary: $70K - $110K (changes may vary depending on location)
                    School Years: 1-2
                    Demand: Growing
    </CardText>
         
                </Card>


                <Card>
                    <CardHeader
                        title="Criminal Justice Jobs"
                        subtitle="Police Officer "
                        avatar="https://www.drugrehab.com/wp-content/themes/dr/images/police/image-protecting.png"  alt="detective" alt="front end"
                    />
                    <CardMedia
                        overlay={<CardTitle title="Criminal Justice Jobs" subtitle="Police Officer " />}
                    >
                        <img src="https://www.drugrehab.com/wp-content/themes/dr/images/police/image-protecting.png"  alt="detective" alt="front end" alt="nurse" />
                    </CardMedia>
                    <CardTitle title="Criminal Justice Jobs" subtitle="Police Officer  " />
                    <CardText>
                    Salary: $45K - $70K (changes may vary depending on location)
                    School Years: 1
                    Demand: High

    </CardText>
                </Card>
            </div>
        );
    }
}

export default CriminalJobs;