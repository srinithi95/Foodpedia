import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {addCart} from '../../redux/actions/cartActions'

function Card(props) {

    const vendor = props.products.vendor;
    const name = props.products.name;
    const image = props.products.image_src;
    const price = props.products.price;
    const options = props.products.options;


    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(addCart({vendor:vendor,name:name,image:image,price:price,options:options}))
        
    }
    // displays food's information on a card.
    // <h5 className="card-title">{vendor}</h5> displays card
    
    return (
        <div className="container-fluid" style={{fontSize:24}} onClick={onClick}>
            <div className="card" >
                <p className="card-text">{name}</p>
                <img src={image} className="card-img-top" alt="..." />
                <span className="card-body" >


                    <span className="card-text" ><strike>$ {price *2.0}</strike> -> $ {price} </span>
                    <button style={{backgroundColor: "white", border: "white"}}>Add to Cart</button>
                </span>
            </div>
        </div>
    )
}

export default Card;
