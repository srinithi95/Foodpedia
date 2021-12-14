import React, { useState, useEffect } from 'react';
import search from '../images/search.png'
import ToolMap from './ToolMap'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "./Search.css";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router'





const  RestaurantEdit = (props) => {
    const navigate=useNavigate()
    const onSave =()=>{
        navigate('/restaurant')
    }
    const location=useLocation()
    console.log(location.state)
    React.useEffect(() => {
      document.getElementById("item-name").value=location.state.item.name
      document.getElementById("item-category").value=location.state.item.category
      document.getElementById("Original-price").value=location.state.item.original_price
      document.getElementById("Current-price").value=location.state.item.current_price
      document.getElementById("image-preview").src=location.state.item.image
      document.getElementById("item-description").value=location.state.item.description
      
      }, []);
const imageSet=(event)=>{
    console.log(event.target.files[0])
    document.getElementById("image-preview").src=URL.createObjectURL(event.target.files[0])
}
    
   

    return (
    <div className="container">
        <div class="row col-sm text-center">
    <h4 className="col-lg-2 col-sm-7"><b>Edit Item</b></h4> 
    </div>
        <br/>
       <form>
  <div class="form-group row">
    <label for="inputEmail3" class=" col-4 col-lg-2 justify-content-start col-form-label" >Item Name<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3" >
      <input type="text" id="item-name" class="col-sm no gutters col-form-label" class="form-control" style={{width:"70%"}} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-5 col-lg-2  col-form-label">Item Description<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="form-control" id="item-description" style={{width:"70%",height:"70px"}} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Item category<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="form-control" id="item-category" style={{width:"70%"}} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Original Price<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="form-control" id="Original-price" style={{width:"70%"}} />
    </div>
  </div>
  
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Current Price<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="form-control" id="Current-price" style={{width:"70%"}} />
    </div>
  </div>


  <div class="form-group row">
  <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Item Image   </label>
    <div class="col-sm-10 mb-3" style={{width:"60%"}} >
    <input class="form-control form-control-sm" id="image-select" style={{width:"60%"}}  type="file" onChange={imageSet} />
    <img className="col-sm-4 col-lg-4 " style={{maxHeight:"250px"}} id="image-preview" src="#"></img>
    </div>
  </div>
  
   <button style={{width:"fit-content",backgroundColor:"#EBECF0",border:"None",height:"40px",textAlign:"center", marginLeft:"50%", marginRight:"10px"}} className="col-lg- col-sm-7"
  class="btn btn-info btn-lg btn-block" type="submit" id="submit" onClick={onSave} >Delete Item </button>
  <button style={{width:"fit-content",backgroundColor:"#EBECF0",border:"None", margin: "10px", height:"40px",textAlign:"center" }} 
  class="btn btn-info btn-lg btn-block" type="submit" id="submit" onClick={onSave}>Save Changes</button>
  
</form>

    </div>

    )
}


export default RestaurantEdit