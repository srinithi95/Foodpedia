import React from 'react'
import { Card } from 'react-bootstrap'
import card1 from '../images/card1.jpg'



const InfoCard = ({img,title,name}) => {
    return (
        <div>
            <Card style={{ width: '25rem',borderRadius:'8' }}>
                
                <Card.Img variant="top" src={img} style={{height:250}}/>

                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {name}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
)
}

    export default InfoCard