import React from 'react'
import { Card } from 'react-bootstrap'
const About = () => {
    return (
        <div class="container center-div">
            
        <div class="row-md-15">
            <div class="col-md-4">
            About
            <br></br>
            We are a "Mission statement type thing"
            <br></br>
            Meet the team: Sriniti
                            <br></br>
                            Chris
                           <br></br>
                           Jimmy
                           <br></br>
                           Dev
                           <br></br>

        </div>
        <div class="col-md-10">
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>General Information</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>
        </div>

        </div>
        
    )
}

export default About
