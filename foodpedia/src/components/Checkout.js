import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../images/backBtn.png";
import "./dev.css";
import Visa from "../images/visa.png";
import MC from "../images/masterCard.png";
import PP from "../images/paypal.png";
import Discover from "../images/discover.png";
import Amazon from "../images/amazon.png";
import Rider from "../images/rider.png";

const Checkout = () => {
  const paymentCheckBox = {
    height: 18,
    width: 18,
  };
  return (
    <>
      <div className="tab">
        <div className="backBtn">
          <Link to="/cart">
            <img className="backArrow" src={Arrow} />
          </Link>
        </div>
        <h1>Payment</h1>
      </div>
      <div className="mainPaymentContainer">
        <div className="paymentLeft">
          <div className="deliveryTime">
            <h1>Delivery Time</h1>
            <div className="deliveryTimeInfo">
              <img src={Rider} />
              <h1>25 Mins</h1>
            </div>
          </div>
          <h3>Billing Address</h3>
          <div className="addressInfo">
            <form>
              <div className="fTI">
                <input
                  className="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <br />
              <div className="sTI">
                <input
                  className="contactNumber"
                  type="text"
                  placeholder="Phone Number"
                />
                <input className="email" type="text" placeholder="Email" />
              </div>

              <br />
              <textarea
                className="addressField"
                type="text"
                placeholder="Address"
              />
              <br />
              <div className="sTI">
                <input
                  className="contactNumber"
                  type="text"
                  placeholder="Address line 1"
                />
                <input
                  className="email"
                  type="text"
                  placeholder="Address line 2"
                />
              </div>

              <br />
              <div className="sTI">
                <input
                  className="contactNumber"
                  type="text"
                  placeholder="State"
                />
                <input className="email" type="text" placeholder="City" />
              </div>

              <br />
              <div className="sTI">
                <input
                  className="contactNumber"
                  type="text"
                  placeholder="Zip Code"
                />
                <input
                  className="email"
                  type="text"
                  placeholder="Special note"
                />
              </div>

              <br />
              <br />
              {/* <textarea
                className="specialNotes"
                type="text"
                placeholder="Special Notes"
              /> */}
              <br />
              <Link to="/confirmed">
                <input
                  className="placeOrder"
                  type="submit"
                  value="Place Order"
                />
              </Link>
            </form>
          </div>

          <div className="paymentOptions">
            <h2>Payment Methods</h2>
            <div className="paymentMethods">
              <img src={Visa} />
              <img src={MC} />
              <img src={PP} />
              <img src={Discover} />
              <img src={Amazon} />
            </div>
          </div>

          {/* PAYMENT OPTIONS WITH CHECKBOX -----START------ */}
          {/*<div className="paymentOptions">
            <h2>Payment Methods</h2>
            <div className="paymentMethods">
              <input type="checkbox" style={paymentCheckBox} />
              <img src={Visa} />
              <input type="checkbox" style={paymentCheckBox} />
              <img src={MC} />
              <input type="checkbox" style={paymentCheckBox} />
              <img src={PP} />
              <input type="checkbox" style={paymentCheckBox} />
              <img src={Discover} />
              <input type="checkbox" style={paymentCheckBox} />
              <img src={Amazon} />
            </div>
          </div> */}
          {/* PAYMENT OPTIONS WITH CHECKBOX -----END------ */}
        </div>
        <div className="paymentRight">
          <div className="orderSummary">
            <h1>Your Order</h1>
            <div className="orderInfo">
              <div className="orderItem">
                <h5>Crab Legs - 1</h5>
                <h5>$19.99</h5>
              </div>
              <div className="orderItem">
                <h5>Grilled Fish - 1</h5>
                <h5>$11.99</h5>
              </div>
              <div className="orderSubTotal">
                <div className="orderPrice">
                  <h5>SUBTOTAL</h5>
                  <h5>$31.98</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="deliverySummary">
            <div className="deliverySummaryText">
              <h1>Delivery Charge</h1>
              <h4>Free Delivery Charges</h4>
            </div>
            <div className="orderSubTotal">
              <div className="orderPrice">
                <h5>TOTAL</h5>
                <h5>$31.98</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
