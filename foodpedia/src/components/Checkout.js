import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../images/backBtn.png";
import "./dev.css";
import Visa from "../images/visa.png";
import MC from "../images/masterCard.png";
import PP from "../images/paypal.png";
import Discover from "../images/discover.png";
import Amazon from "../images/amazon.png";
import CardCVV from "../images/cardcvv.jpg";
import Rider from "../images/rider.png";
import {Form, Button, Row, Col, Container} from 'react-bootstrap'

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
      <Container className="mb-5">
          <Row>
            <Col lg={7} md={6}>
            {/* <div className="paymentLeft"> */}
            <div className="deliveryTime">
              <h1>Delivery Time</h1>
              <div className="deliveryTimeInfo">
                <img src={Rider} />
                <h1>25 Mins</h1>
              </div>
            </div>
            <hr/>
          <h6>Shipping Address</h6>
          <Form style={{width: '100%'}}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter FirstName" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneNo">
            <Form.Label>Phone No</Form.Label>
            <Form.Control type="number" placeholder="contact no" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" placeholder="Address" rows={3} />
          </Form.Group>
          <Row>
            <Col md={4}>
            <Form.Group className="mb-3" controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="state" />
          </Form.Group>
            </Col>
            <Col md={4}>
            <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="zipcode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Zip Code" />
            </Form.Group>
            </Col>
          </Row>
         
         
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Special Note</Form.Label>
            <Form.Control as="textarea" placeholder="Special note" rows={1} />
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
          {/* <div className="addressInfo">
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
             
            </form>
          </div> */}

          
        
             {/* </div> */}
            </Col>
            <Col lg={5} md={6}>
            {/* <div className="paymentRight"> */}
              {/* PAYMENT OPTIONS WITH CHECKBOX -----START------ */}
          <div className="paymentOptions">
          <h3>Secure Payment Info</h3>
            <div className="paymentMethods">
              <input type="radio" name="paymentCard"/>
              <img src={Visa} />
              <input type="radio" name="paymentCard"/>
              <img src={MC} />
              <input type="radio" name="paymentCard" />
              <img src={PP} />
              <input type="radio" name="paymentCard"/>
              <img src={Discover} />
              <input type="radio" name="paymentCard"/>
              <img src={Amazon} />
            </div>
            <Form style={{width: '100%'}}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>Name(as it appears on your card)</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Card Number(no dashes or spaces)</Form.Label>
              <Form.Control type="number" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Expiration date</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Row>
              <Col xs={10}>
              <Form.Group className="mb-3" controlId="phoneNo">
                <Form.Label>Security code(3 on back, Amex: 4 on front)</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              </Col>
              <Col xs={2} style={{margin: 'auto'}}>
              <img src={CardCVV} />
              </Col>
            </Row>
            
            </Form>
          </div> 
          {/* PAYMENT OPTIONS WITH CHECKBOX -----END------ */}
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
              <div className="orderItem">
                <h5>Delivery Charges</h5>
                <h5>$0</h5>
              </div>
              <div className="orderSubTotal">
              <div className="orderPrice">
                <h5>TOTAL</h5>
                <h5>$31.98</h5>
              </div>
            </div>
            </div>
            
            <div className="deliverySummary">
            {/* <div className="deliverySummaryText">
              <h1>Delivery Charge</h1>
              <h4>Free Delivery Charges</h4>
            </div> */}
         
            
          </div>
          </div>
          <Link to="/confirmed">
                <input
                  className="placeOrder"
                  type="submit"
                  value="Place Order"
                />
              </Link>
        {/* </div> */}
            </Col>
          </Row>
      </Container>
      {/* <div className="mainPaymentContainer"> */}
       
       
      {/* </div> */}
    </>
  );
};

export default Checkout;
