import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl, Container, Col, Row } from 'react-bootstrap'
import { BsSearch, BsFillBasket2Fill } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import search from '../images/search.png'
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
            image:search,
            category:"Rice",
            original_price:"$10",
            current_price:"$5",
            description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
        } ,
        {
            name:"Hakka Noodles",
            image:search,
            category:"Noodes",
            original_price:"$8",
            current_price:"$2",
            description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     } ,
     {
         name:"Crispy chilli role",
         image:search,
         category:"Breakfast",
        original_price:"$15",
        current_price:"$7",
        description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     } ,
     {
         name:"Veg Tom Yum",
         image:search,
         category:"Soup",
         original_price:"$10",
         current_price:"$5",
         description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     },
     {
         name:"Wings of Heaven",
         image:search,
         category:"Noodles",
         original_price:"$10",
         current_price:"$5",
         description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     }, 
     {
        name:"Burnt Garlic",
        image:search,
        category:"Noodles",
        original_price:"$18",
        current_price:"$10",
        description:"Choose coleslaw or vegetables and your choice of lemon garlic butter sauce and teriyaki sauce."
     }
    ]


  return (
    <div >
       <div id="heading" marginLeft="10%">
          <p style={{fontSize:"35px",marginLeft:"10px",alignItems:"left"}}>WcDonald Menu</p> 
         
          
      <div className="row">
          <Col>
          <InputGroup style={{ border: '1px solid black', borderRadius: 6, width:"90%" }} >
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
          <Col lg={3} md={1} style={{paddingRight:"70%"}} >
          <Button style={{ backgroundColor:"#EBECF0", color: 'black',width:"200px", border:'None',height:"40px" }} onClick={onAdd}>+ Add item </Button>
          </Col>
      </div>
      <br/>
      <div className="row mt-4">
      {results_main.map((product) => (
        <div class="card mx-3 my-2 h-50" style={{width: "25rem",height:"50px"}} onClick={()=> navigate('/restaurantEdit',{state:{item:product}})}>
        <img class="card-img-top" src={search} alt="Card image cap" style={{height:"13rem",width:"25rem"}} onClick={()=> navigate('/restaurantEdit',{state:{item:product}})}/>
        <div>
      <h4 style={{height:"30px"}}><b>Chinese schewan fried rice</b></h4>
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
