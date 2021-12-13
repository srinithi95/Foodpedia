import React, { useEffect, useState } from "react";

import data from "../data.json";
import Card from "./card/Card.jsx";
import Filter from "./filter/Filter.jsx";
import '../components/stylesheet.css';
import star from '../components/star.jpg';
import InfoCard from './InfoCard'
import Pagination from './Pagination';
 
// reference was https://codesandbox.io/s/react-ecommerce-forked-wp1x1?file=/src/components/core/home/Home.jsx and access date was 11/22/21
// Restaurant should have certain names to be displayed.
const Restaurant = () => {

  const [products, setProducts] = useState([]);
  let [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  // restaurant has food
  useEffect(() => {
    filteredProducts = data.slice(indexOfFirstPost, indexOfLastPost);
    
    setFilteredProducts(filteredProducts);
    
  }, [ filteredProducts, setFilteredProducts]);

  useEffect(() => {
    
    const filtered = selectedTag
      ? filteredProducts.filter((item) => item.tag === selectedTag)
      : filteredProducts;

    setFilteredProducts(
      
      sortBy
        ? [...filtered].sort((a, b) =>
            sortBy === "lowest" ? a.price - b.price : b.price - a.price
          )
        : [...filtered].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  }, [selectedTag, sortBy, filteredProducts]);

  


  const paginate = pageNumber => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  return (
    <div className="container-fluid">
       
    <div class="div1" style={{marginLeft:75}}><h2>Wcdonalds</h2></div> <img src={star} alt="Logo" style={{ width: "2rem", float: 'right'}} />
    <div class="div2"><h3>30-40 Min : 4.4  </h3> </div> 
    <br></br>
    <br></br>
      <Filter 
        handleSort={setSortBy}
        handleTagChange={setSelectedTag}
        selectedTag={selectedTag}
        sortBy={sortBy}
        filteredProducts={9}
        postsPerPage={9}
        totalPosts={11}
      />
     
      <div className="row custom-card" style={{marginLeft:50,marginRight:50}}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-2" style={{marginTop:'2rem'}}>
            <Card products={product} />
          </div>
        ))}
      </div>
 
      <div style={{paddingLeft:"40%"}}>
    
      <Pagination
        filteredProducts={9}
        postsPerPage={9}
        totalPosts={10}
        paginate={paginate}
      />
    </div>
    </div>
  )
}

export default Restaurant;
