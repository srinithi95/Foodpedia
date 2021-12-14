import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import search from '../images/search.png'
import ToolMap from './ToolMap'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "./Search.css";
import { CardGroup } from 'react-bootstrap'
import InfoCard from './InfoCard'
import Pagination from './Pagination';
import Card from "./card/Card.jsx";
import { useNavigate } from 'react-router';

const Search = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
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
    }, 
    {
        name:"WcDonalds",
        image:search
    },
    {
        name:"WcDonalds",
        image:search
    },
    {
        name:"WcDonalds",
        image:search
    },
    {
        name:"WcDonalds",
        image:search
    },
    {
        name:"WcDonalds",
        image:search
    },
    {
        name:"WcDonalds",
        image:search
    }
    ]
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const current_search_Results = search_results.slice(indexOfFirstPost, indexOfLastPost);
    
    // used to navigate
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/test')
    }
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="container-fluid">
      <div className="row" id="heading">
          <div style={{paddingLeft:"5%"}} className="col col-lg-5">
    <p  style={{fontSize:"20px", paddingRight:"50%"}}>Showing 1-9 of 11</p>
          </div>
     <div className="col col-md-3">
          <select id="inputState" class="form-control"  required>
            <option>Sort By</option>
            <option value="AS">Rating</option>
            <option value="GU">Most Popular</option>
            <option value="MP">Delivery time</option>
           </select>
       </div>
       </div>
       <br/>
       <div id="map-container">
    <ToolMap coordinates={coordinates}/><br/><br/><br/>
   </div>
   <div id="card-display" style={{paddingLeft:"5%", minWidth:"18rem"}} className="col-10  mb-4 custom-card">
    <CardGroup style={{ gap: 80, marginBottom: "10px" }} >
    {current_search_Results.map((product) => (
        <div className="col-md-3 mb-2" onClick={onClick}>
          <InfoCard img={product.image} title={product.name} name='Johnnies and Co'/>
         
          </div>
        ))}
     </CardGroup>
     
    
    </div>
    <div style={{paddingLeft:"40%"}}>
    
    < Pagination
        postsPerPage={9}
        totalPosts={11}
        paginate={paginate}
      />
    </div>
  
        </div> 
    )
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBXc7jVrGvPam1KvriR0lbN0xYuZFvVTs8",
  })(Search);
