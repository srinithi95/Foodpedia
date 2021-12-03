import React from 'react'
import { Card } from 'react-bootstrap'
import smartphone from '../components/womendinnersmartphone.jpg';
 
 <link rel="stylesheet" href="stylesheet.css"></link>

const About = () => {
  
    return (
      <div>We are a "Mission Statement typa thing"
<div class="row">
  
  <div class="col-sm-2">
      <div class="card-body">
        <h5 class="card-title">Meet the team:</h5>
      </div>
  </div>
  <div class="col-sm-1">
      <div class="card-body">
        <p class="card-text">Sriniti</p>
        <p class="card-text">Chris</p>
        <p class="card-text">Jimmy</p>
        <p class="card-text">Dev</p>
      </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="left-text"> </h5>
        All of our members are senior students of San Francisco State univeristy.
        A food ordering and delivery application to save food, make it affordable to customers and profitable to restaurants.
        FoodPedia is a food ordering and delivery application which would help people to order food at a discounted price using 
        an innovative idea. Our application focuses on saving the food and helping people utilize it, before it is wasted, at a much lower price.
         We partner with restaurants and they can list their leftover food menu items or ingredients at a lower rate than the competitors, without 
         any additional fees, to save their food from going to waste.
  
         <div class="right-picture" >
         <img src ={smartphone} style={{ width: "100%"}}></img>
         </div>
        
        <br></br>
        Our focus is to save the leftover food and ingredients in restaurants at the end of each day which would either go to waste or expire. For restaurants, it is
        extremely difficult to order the precise amount of food needed to satisfy demand on a weekly/ biweekly basis. Those restaurants can sell the leftover food or freshly prepared food with leftover ingredients at a discounted price using our application. The user can search and order food from all the nearby restaurants and specifically those that are partnered with us and provide food at discounted prices. The user can make use of various filters like cuisines, location and discounts. To deliver your food faster and in an affordable manner, we have partnered with local delivery services and companies. We use their portal to forward the delivery instructions and the delivery is fulfilled by the nearest driver in their database. Delivery costs are minimal depending on your location but will be waived if you are our Pro Member.The motivation behind this application is to make the food more affordable to people and also make the restaurants more profitable by saving the food, ingredients and the environment. All surplus meals bought through FoodPedia helps restaurants cut down on costs, gain exposure and compete with big restaurant chains. To encourage the practice of saving the environment and food, we will reimburse all partnering restaurants for the packaging material used for the orders if they are 100% compostable and eco-friendly. Just send us a receipt and we got you covered.

        
        <br></br>
        <p class="card-text">General information</p>
        
        <br></br>
        <br></br>
      </div>
    </div>
  </div>
</div>
</div>
        
    )
}

export default About
