import React, { useState } from 'react'
import food from '../images/food.jpg'
import InfoCard from './InfoCard'
import { CardGroup } from 'react-bootstrap'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'
import './Homepage.css'
import { useNavigate } from 'react-router'


const Homepage = () => {

    const navigate = useNavigate()
    const onClick = () => {
        console.log('NAV')
        navigate('/restaurant')
    }
    return (

        <div>
            <div className='homeInfo'>
                <div className='mission'>
                    A discounted food delivery service<br/> 
                    focusing on freshly prepared <br />unsold ingredients to prevent <br />restaurant
                    food waste, making it both
                    <br />affordable AND sustainable

                </div>

                    <img src={food} alt="Logo" />

            </div>
            <div className='mission' >
                <CardGroup style={{justifyContent:'space-evenly' }}>
                    <InfoCard className='test' img={card1} title='Top Seller' name='Johnnies and Co' />
                    <InfoCard img={card2} title='Most Liked' name='Lady W' />
                    <InfoCard img={card3} title='Deal of the Day' name='Banda Express' />
                </CardGroup>
            </div>
        </div>

    )
}

export default Homepage
