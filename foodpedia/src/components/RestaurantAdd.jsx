import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router'
import {connect} from 'react-redux'
import search from '../images/search.png'
import ToolMap from './ToolMap'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "./Search.css";
import { CardGroup } from 'react-bootstrap'
import InfoCard from './InfoCard'
import Pagination from './Pagination';
import Card from "./card/Card.jsx";

const RestaurantAdd = (props) => {
   const [imageUpload,setImageUpload]=React.useState(false)
    const navigate=useNavigate()
    const onSave =()=>{
        navigate('/restaurant')
    }
    const setImage =(event) =>{

      
      let check=!!document.getElementById("image-upload")
      console.log("here")
      if (check===true){
        const img=document.getElementById("image-upload")
        img.src=URL.createObjectURL(event.target.files[0])
       
     
      } else {
      const temp=document.getElementById("file-input")
      const img=document.createElement("img")
      img.src=URL.createObjectURL(event.target.files[0])
      img.id = "image-upload"
      img.style["maxHeight"] = "250px";
      temp.appendChild(img)
      console.log("no here")
      }
     }
   
    return (
    <div className="container">
       <form>
  <div class="form-group row">
    <label for="inputEmail3" class=" col-4 col-lg-2 justify-content-start col-form-label" >
      Item Name<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="col-sm no gutters col-form-label" class="form-control" id="inputEmail3"
       style={{width:"70%"}}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-5 col-lg-2  col-form-label">Item Description<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="form-control" id="inputPassword3" style={{width:"70%",height:"70px"}} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Item category<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="form-control" id="inputPassword3" style={{width:"70%"}} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Original Price<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="form-control" id="inputPassword3" style={{width:"20%"}} />
    </div>
  </div>
  
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Current Price<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8 mb-3">
      <input type="text" class="form-control" id="inputPassword3" style={{width:"20%"}} />
    </div>
  </div>


  <div class="form-group row">
  <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Choose an image   </label>
    <div class="col-sm-10 mb-3" id="file-input" style={{width:"60%"}} >
    <input class="form-control form-control-sm" id="formFileSm" style={{width:"12%"}}  type="file" onChange={setImage} />
    </div>
  </div>
 
  
  
</form>
<div className="container" style={{paddingRight:"50%"}}>
  <button style={{width:"fit-content",backgroundColor:"#EBECF0",border:"None", marginLeft:"50%",
marginRight:"auto"}} 
  class="btn btn-info btn-lg btn-block" type="submit" id="submit" onClick={onSave} >Add Item</button>
  </div>



    </div>

    )
}


export default RestaurantAdd;
