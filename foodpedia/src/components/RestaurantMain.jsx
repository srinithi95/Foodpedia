import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl, Container, Col, Row } from 'react-bootstrap'
import { BsSearch, BsFillBasket2Fill } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import search from '../images/search.png'
import BabyCorn from '../images/BabyCorn.png'
import FriedRicegarlic from '../images/FriedRicegarlic.png'
import chillrice from '../images/chillrice.png'
import sourSoup from '../images/sourSoup.png'
import paneer from '../images/paneer.png'
import './RestaurantMain.css'
import "./Search.css";



const RestaurantMain = () => {
const navigate=useNavigate()
const onAdd = () => {
    
        navigate('/restaurantAdd')
    
}   
const onEdit = (e) => {
    navigate('/restaurantEdit')
    console.log(e)
    
    

}
    const results_main=[
        {
            name:"Chinese Schewan fried rice",
            image:FriedRicegarlic,
            category:"Rice",
            original_price:"$10",
            current_price:"$5",
            description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
        } ,
        {
            name:"Burnt Garlic Chili Rice",
            image:chillrice,
            category:"Noodes",
            original_price:"$8",
            current_price:"$2",
            description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     } ,
     {
         name:"Lat Mai fish fry & Chicken ",
         image:search,
         category:"Breakfast",
        original_price:"$15",
        current_price:"$7",
        description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     } ,
     {
         name:"Spicy sweet corn Veg soup",
         image:sourSoup,
         category:"Soup",
         original_price:"$10",
         current_price:"$5",
         description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     },
     {
         name:"Crispy chilli Baby corn",
         image:BabyCorn,
         category:"Noodles",
         original_price:"$10",
         current_price:"$5",
         description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     }, 
     {
        name:"Lat Mai Paneer & Chicken ",
        image:paneer,
        category:"Noodles",
        original_price:"$18",
        current_price:"$10",
        description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     }
    ]


  return (
    <div className="container">
       <div id="heading" marginLeft="10%">
          <p style={{fontSize:"35px",marginLeft:"10px",alignItems:"left"}}>WcDonald Menu</p> 
         
          
      <div className="row">
          <Col>
          <InputGroup style={{ border: '1px solid black', borderRadius: 6, width:"100%" }} >
            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white', borderColor: 'white' }}><b>Find</b></InputGroup.Text>
                <FormControl
                                placeholder="Search for items.."
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: 'white', borderColor: 'white' }}
                            />
                 <Button style={{ backgroundColor: "#FFA6A6", borderColor: '#FFA6A6', color: 'black' }}><BsSearch /></Button>                                  
                 </InputGroup>
          </Col>
          <Col lg={3} md={1} style={{paddingRight:"50%"}} >
          <Button style={{ backgroundColor:"#EBECF0", color: 'black',width:"200px", border:'None',height:"40px" }} onClick={onAdd}>+ Add item </Button>
          </Col>
      </div>
      <br/>
      <div className="row mt-4">
      {results_main.map((product) => (
        <div class="card mx-3 my-2 h-50" style={{width: "25rem",height:"50px"}} onClick={()=> navigate('/restaurantEdit',{state:{item:product}})}>
        <img class="card-img-top" src={product.image} alt="Card image cap" 
        style={{height:"13rem",width:"100%"}} onClick={()=> navigate('/restaurantEdit',{state:{item:product}})}/>
        <div>
      <h4 style={{height:"30px"}}><b>{product.name}</b></h4>
          <h5 style={{paddingRight:"30%"}}><b>Category: </b>{product.category}</h5>
      <h5 style={{paddingRight:"30%"}}><b>Original Price: </b> {product.original_price}</h5>
          <h5 style={{paddingRight:"30%"}}><b>Current Price: </b>{product.current_price} </h5>
         
          
        </div>
      </div>
         
        
        ))}
        </div>
      
      <div >
      
      </div>                          
    </div> 
    </div>
  )
}

export default RestaurantMain;
