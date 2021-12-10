import React, { useState } from "react";
import DISH from "../images/dish.png";
import Popup from "./Popup";
import Info from "../images/info.png";
import Order from "../images/food.jpg";
const OrderConfirmed = () => {
  const [modal, setModal] = useState(false);
  const [modalOrder, setModalOrder] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleOrderModal = () => {
    setModalOrder(!modalOrder);
  };
  return (
    <>
      <div className="mainConfirmPage">
        <div className="ConfirmText">
          <h1>Thank You!</h1>
          <h2>Your order has been confirmed</h2>
        </div>
        <div className="ConfirmImage">
          <img src={DISH} />
        </div>

        <h3>Latest Arrival by 7:40pm</h3>

        <div className="ConfirmButtons">
          <button onClick={handleModal}>Contact Us</button>
          <button onClick={handleOrderModal}>Your Order</button>
        </div>
      </div>
      {modalOrder && (
        <Popup
          onclick={handleOrderModal}
          d1="Order No#: 4218433"
          d2="crab legs - 1"
          d21="grilled fish - 1"
          d222="Delivery Free"
          d3="Total: $31.98"
          image={Order}
        />
      )}
      {modal && (
        <Popup
          onclick={handleModal}
          d1="Phone: 1122334455"
          d2="Email: foodpedia.com"
          d3="Address: United States, CA"
          image={Info}
        />
      )}
    </>
  );
};

export default OrderConfirmed;
