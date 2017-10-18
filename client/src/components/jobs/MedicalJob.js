import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// const MedicalJobStyles = styled.div`
const styles = {
card: {
    margin: 'auto',
    width: 650,
    

}

}






class MedicalJob extends Component {
    render() {
        
        return (
            <div style={styles.card} >

{/* const CardExampleWithAvatar = () => ( */}
    {/* <MedicalJobStyles> */}
  <Card>
    <CardHeader
      title="Medical Jobs"
      subtitle="Nurse Anthologist"
      avatar="http://nursinglink.monster.com/nfs/nursinglink/attachment_images/0015/8190/anesthetistnurse_crop380w.jpg?1284503282"
    />
    <CardMedia
      overlay={<CardTitle title="Medical Jobs" subtitle="Nurse Anthologist" />}
    >
      <img src="http://nursinglink.monster.com/nfs/nursinglink/attachment_images/0015/8190/anesthetistnurse_crop380w.jpg?1284503282" alt="nurse" />
    </CardMedia>
    <CardTitle title="Medical Jobs" subtitle="Nurse Anthologist " />
    <CardText>
    Salary: $100K - $150K (changes may vary depending on location)
    School Years: Two - Six
    Demand: High
    </CardText>
    {/* <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions> */}
  </Card>

  <Card>
    <CardHeader
      title="Medical Jobs"
      subtitle="Surgical Tech"
      avatar="https://www.allalliedhealthschools.com/wp-content/uploads/2016/09/hero-medical-technician-surgical-assistant-vs-technician.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Medical Jobs" subtitle="Surgical Tech" />}
    >
      <img src="https://www.allalliedhealthschools.com/wp-content/uploads/2016/09/hero-medical-technician-surgical-assistant-vs-technician.jpg" alt="nurse" />
    </CardMedia>
    <CardTitle title="Medical Jobs" subtitle="Surgical Tech " />
    <CardText>
    Salary: $50K - $90K (changes may vary depending on location)
    
    School Years: Two - Four
    Demand: Skyrocketing
    </CardText>
    {/* <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions> */}
  </Card>



              






{/* 
                <h1> Medical Jobs</h1>
                
                <h3> Nurse Anesthetist </h3>
                <img src="http://nursinglink.monster.com/nfs/nursinglink/attachment_images/0015/8190/anesthetistnurse_crop380w.jpg?1284503282" alt="nurse anthe"/>
                <p> Salary: $100K - $150K (changes may vary depending on location)</p>
                <p> School Years: Two - Six </p>
                <p>Demand: High</p>

                <br/>

                <h3> Surgical Technical </h3>
                <img src="https://www.allalliedhealthschools.com/wp-content/uploads/2016/09/hero-medical-technician-surgical-assistant-vs-technician.jpg" alt="nurse surge"/>
                <p> Salary: $50K - $90K (changes may vary depending on location)</p>
                <p> School Years: Two - Four</p>
                Demand: Skyrocketing */}
                {/* </MedicalJobStyles> */}



              

            </div>
        );
    }
}

export default MedicalJob;