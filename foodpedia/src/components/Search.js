import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import search from '../images/search.png'
import ToolMap from './ToolMap'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "./Search.css";
import { CardGroup } from 'react-bootstrap'
import SearchInfoCard from './SearchInfoCard'
import Pagination from './Pagination';
import Burger from '../images/Burger.png';
import Halal from '../images/Halal.png';
import Salmon from '../images/Salmon.png';
import paneer from '../images/paneer.png';
import grilledFish from '../images/grilledFish.png';
import FriedRicegarlic from '../images/FriedRicegarlic.png'
import sourSoup from '../images/sourSoup.png'
import Cafe from '../images/Cafe.png'
import { useNavigate } from 'react-router';

const Search = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const coordinates=[{
    lat:37.733795,
    lng:-122.446747
  },{
      lat:37.335480,
      lng:-121.893028
  },{
      lat: 37.548271,
      lng:-121.988571
  },{
      lat:36.746841,
      lng:-119.772591
  },{
      lat:38.575764,
      lng:-121.478851
  }
]
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
           image:grilledFish
       } ,
       {
        name:"Pizzeria",
        image:search
    } ,
    {
        name:"Burger Queen",
        image:Burger
    } ,
    {
        name:"Salmon Galore",
        image:Salmon
    },
    {
        name:"Popeyel",
        image:sourSoup
    }, 
    {
        name:"WcDonalds",
        image:search
    },
    {
        name:"Wanchin Bamboo",
        image:paneer
    },
    {
        name:"Chod's Cafe",
        image:search
    },
    {
        name:"Wangs Kitchen",
        image:FriedRicegarlic
    },
    {
        name:"Halal Fuys",
        image:Halal
    },
    {
        name:"Cafe De Varis",
        image:Cafe
    }
    ]
    var indexOfLastPost;
    if(currentPage * postsPerPage>11){
         indexOfLastPost = 11
    }
    else{
         indexOfLastPost = currentPage * postsPerPage;
    }
    
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
    <p  style={{fontSize:"20px", paddingLeft:"30%"}}>Showing {indexOfFirstPost+1}-{indexOfLastPost} of 11</p>
          </div>
     <div className="col col-md-4" style={{fontSize:"20px", paddingLeft:"20%"}}>
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
    <ToolMap coordinates={coordinates}/><br/>
   </div>
   <div id="card-display" style={{paddingLeft:"15%", minWidth:"25rem"}} className="col  mb-4 custom-card">
    <CardGroup style={{ gap: 10, marginBottom: "10px",width:"100%" }} >
    {current_search_Results.map((product) => (
        <div className="col-md-3 mb-2" onClick={onClick}>
          <SearchInfoCard img={product.image}  title="test" name={product.name}/>
          </div>
        ))}
     </CardGroup>
    </div>
    <div style={{paddingLeft:"40%"}}>
    <Pagination
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
