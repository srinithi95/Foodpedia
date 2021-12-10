import React, { useEffect, useState } from 'react'

function Card(props) {
    
    const vendor = props.products.vendor;
    const name = props.products.name;
    const image = props.products.image_src;
    const price = props.products.price;
    const options = props.products.options;

    // displays food's information on a card.
    // <h5 className="card-title">{vendor}</h5> displays card
    return (
        <div className = "container-fluid">
            <div className="card" style={{width: "18rem"}}>
            <p className="card-text">{name}</p>
            <img src= {image} className="card-img-top" alt="..." />
            <div className="card-body">
                
                
                <p className="card-text">$ {price}</p>
            </div>
            </div>
        </div>
    )
}

export default Card;
