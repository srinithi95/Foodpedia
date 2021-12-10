import React from 'react'
import {connect} from 'react-redux'
import search from '../images/search.png'
import ToolMap from './ToolMap'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "./Search.css";
import { CardGroup } from 'react-bootstrap'
import InfoCard from './InfoCard'

const Search = (props) => {
  const coordinates=[{
    lat:37.733795,
    lng:-122.446747

  }]
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
    const mapStyles = {
        width:'60%',
        height:'40vh',
        align:"center"
        };
    const search_results=[
       {
           name:"John's food",
           image:search
       } ,
       {
        name:"Pizzeria",
        image:search
    } ,
    {
        name:"Burger King",
        image:search
    } ,
    {
        name:"Salmon Galore",
        image:search
    },
    {
        name:"Popeyes",
        image:search
    }, {
        name:"WcDonalds",
        image:search
    }
    ]

    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-2" id="left-column">
    <p id="heading-1"><b>"Local"</b></p> 
    <p id="heading-2">10+ Results for "Local"</p><br/>     
    <p id="heading-1"><b>Sort</b></p> 
    <div className="radio-group">
    <div id="heading-middle">
 <input
    class="form-check-input"
    type="radio"
    name="flexRadioDefault"
    id="flexRadioDefault1"
  />&nbsp;
  <label class="form-check-label" for="flexRadioDefault1">
     <p id="heading-popular">Most popular</p> </label><br/>
  <input
    class="form-check-input"
    type="radio"
    name="flexRadioDefault"
    id="flexRadioDefault3"
    
  />&nbsp;

  <label class="form-check-label" for="flexRadioDefault3"> <p id="heading-2">Delivery Time</p> </label>
  </div>
  <input
    class="form-check-input"
    type="radio"
    name="flexRadioDefault"
    id="flexRadioDefault2"
  />&nbsp;

  <label  class="form-check-label" for="flexRadioDefault2"> <p id="heading-2">Rating </p> </label>&nbsp;
  </div>
  </div>
        </div>
    <div className="col-9" id="right-column">
    <div id="map-container">
    <ToolMap coordinates={coordinates}/><br/>
    </div>
    <div style={missionStyle}>
    <CardGroup style={{ gap: 150 }}>
    {search_results.map((product) => (
          <InfoCard img={product.image} title={product.name} name='Johnnies and Co'/>
        ))}
     </CardGroup>
    
    </div>
        </div> 
        </div>
       
    )
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBXc7jVrGvPam1KvriR0lbN0xYuZFvVTs8",
  })(Search);
