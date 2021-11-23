import React, { useEffect, useState } from "react";

import data from "../data.json";
import Card from "./card/Card.jsx";
import Filter from "./filter/Filter.jsx";
// reference was https://codesandbox.io/s/react-ecommerce-forked-wp1x1?file=/src/components/core/home/Home.jsx and access date was 11/22/21
// Restaurant should have certain names to be displayed.
const Restaurant = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // restaurant has food
  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
  }, []);

  useEffect(() => {
    const filtered = selectedTag
      ? products.filter((item) => item.tag === selectedTag)
      : products;

    setFilteredProducts(
      sortBy
        ? [...filtered].sort((a, b) =>
            sortBy === "lowest" ? a.price - b.price : b.price - a.price
          )
        : [...filtered].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  }, [selectedTag, sortBy, products]);

  return (
    <div className="container-fluid">
      
      <Filter
        handleSort={setSortBy}
        handleTagChange={setSelectedTag}
        selectedTag={selectedTag}
        sortBy={sortBy}
      />
     
      <div className="row custom-card">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-2">
            <Card products={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restaurant;
