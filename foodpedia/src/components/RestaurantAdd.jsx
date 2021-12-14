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
   
    const navigate=useNavigate()
    const onSave =()=>{
        navigate('/restaurant')
    }
    return (
    <div className="container-fluid">
       <form>
  <div class="form-group row">
    <label for="inputEmail3" class=" col-4 col-lg-2 justify-content-start col-form-label" >Item Name<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8">
      <input type="text" class="col-sm no gutters col-form-label" class="form-control" id="inputEmail3" style={{width:"70%"}} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-5 col-lg-2  col-form-label">Item Description<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputPassword3" style={{width:"70%",height:"70px"}} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Item category<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputPassword3" style={{width:"70%"}} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Original Price<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputPassword3" style={{width:"70%"}} />
    </div>
  </div>
  
  <div class="form-group row">
    <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Current Price<span style={{ "color": "red" }}>*</span></label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputPassword3" style={{width:"70%"}} />
    </div>
  </div>


  <div class="form-group row">
  <label for="inputPassword3" class="col-4 col-lg-2  col-form-label">Choose an image   </label>
    <div class="col-sm-10" style={{width:"60%"}} >
    <input class="form-control form-control-sm" id="formFileSm" style={{width:"60%"}}  type="file" />
    </div>
  </div>
  <button style={{width:"fit-content",backgroundColor:"#EBECF0",border:"None"}} 
  class="btn btn-info btn-lg btn-block" type="submit" id="submit" onClick={onSave} >Add Item</button>
  
</form>




    </div>

    )
}


export default RestaurantAdd;
