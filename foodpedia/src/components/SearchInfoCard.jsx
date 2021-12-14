import React from 'react'
import { Card } from 'react-bootstrap'
import card1 from '../images/card1.jpg'
import './InfoCard.css'



const SearchInfoCard = ({img,title,name}) => {
    return (
        <div>
            <Card className='infocard'>
                <Card.Img variant="top" src={img} style={{height:250}}/>
                
                <Card.Body>
                <Card.Text>
                    {name}
                </Card.Text>
                <Card.Title>{"$2.29 Delivery fee." }</Card.Title>
                <Card.Title>{"15-20 min delivery time" }</Card.Title>
            </Card.Body>
        </Card>
    </div>
)
}

    export default SearchInfoCard