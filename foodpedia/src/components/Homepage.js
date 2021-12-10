import React, { useState } from 'react'
import food from '../images/food.jpg'
import InfoCard from './InfoCard'
import { CardGroup } from 'react-bootstrap'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'


const Homepage = () => {

    const homepageStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }

    const missionStyle = {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '36px',
        lineHeight: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: '60px'
    }

    return (

        <div>
            <div style={homepageStyle}>
                <div style={missionStyle}>
                    A discounted food ordering and delivery
                    <br />service focusing on freshly prepared <br />unsold ingredients to prevent <br />restaurant
                    food waste, making it
                    <br />affordable AND sustainable

                </div>
                <div>
                    <img src={food} alt="Logo" style={{ width: "80%", display: "block" }} />
                </div>
            </div>
            <div style={missionStyle}>
                <CardGroup style={{ gap: 250 }}>
                    <InfoCard img={card1} title='Top Seller' name='Johnnies and Co'/>
                    <InfoCard img={card2} title='Most Liked' name='Lady W' />
                    <InfoCard img={card3} title='Deal of the Day' name='Banda Express' />
                </CardGroup>
            </div>
            <br/>
        </div>

    )
}

export default Homepage
