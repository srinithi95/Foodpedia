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
    lineHeight: '60px',
   

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
      <div className="col-6">
      <div id="col-3 heading col2">
          <b>Showing 1-20 of 30</b>
          </div>
      </div>
      <br/>
      <div  id="map-container">
    <ToolMap coordinates={coordinates}/><br/>
   </div>
    <div id="card-display" className="row custom-card">
    <CardGroup style={{ gap: 150 }} className="col-md-3 mb-2">
    {search_results.map((product) => (
          <InfoCard img={product.image} title={product.name} name='Johnnies and Co'/>
        ))}
     </CardGroup>
    
    </div>
        </div> 
       
        
       
       
    )
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBXc7jVrGvPam1KvriR0lbN0xYuZFvVTs8",
  })(Search);
