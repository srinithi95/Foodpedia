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
import { Form, Button, Row, Col, Container } from "react-bootstrap";

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
        <Col md={1}></Col>
          <Col lg={6} md={6}>
            <div className="orderSummary">
            <div className="deliveryTime">
              <h1>Delivery Time</h1>
              <div className="deliveryTimeInfo">
                <img src={Rider} />
                <h1>25 Mins</h1>
              </div>
            </div>
            <hr />
            <h6>Delivery Address</h6>
            <Form style={{ width: "100%" }}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control type="text" placeholder="First" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control type="text" placeholder="Last" />
                  </Form.Group>
                </Col>
              </Row>
              {/* <Row>
                <Col md={6}>
                <Form.Group className="mb-3" controlId="phoneNo">
                <Form.Label>
                  Phone No <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control type="number" placeholder="(xxx) xxx - xxxx" />
              </Form.Group>
                </Col>
              </Row> */}
              <Form.Group className="mb-3" controlId="address1">
                <Form.Label>Address Line 1 <span style={{ color: "red" }}>*</span></Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Line 1"
                  rows={1}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address2">
                <Form.Label>Address Line 2 </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Line 2"
                  rows={1}
                />
              </Form.Group>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control type="text" placeholder="City" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="state">
                    <Form.Label>State <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control type="text" placeholder="State" />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-3" controlId="zipcode">
                    <Form.Label>Zip Code <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control type="text" placeholder="Zip Code" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Special Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Special Notes"
                  rows={1}
                />
              </Form.Group>
            </Form>
            {/* PAYMENT OPTIONS WITH CHECKBOX -----START------ */}
            <div className="paymentOptions">
              <h3>Secure Payment Info</h3>
              <div className="paymentMethods">
                <input type="radio" name="paymentCard" />
                <img src={Visa} />
                <input type="radio" name="paymentCard" />
                <img src={MC} />
                <input type="radio" name="paymentCard" />
                <img src={PP} />
                <input type="radio" name="paymentCard" />
                <img src={Discover} />
                <input type="radio" name="paymentCard" />
                <img src={Amazon} />
              </div>
              <Form style={{ width: "100%" }}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>Name (as it appears on your card) <span style={{ color: "red" }}>*</span></Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Card Number (no dashes or spaces) <span style={{ color: "red" }}>*</span></Form.Label>
                  <Form.Control type="number" placeholder="" />
                </Form.Group>
               
                <Row>
                <Col xs={4}>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Expiration date <span style={{ color: "red" }}>*</span></Form.Label>
                  <Form.Control type="text" placeholder="DD/MM" />
                </Form.Group>
                </Col>
                  <Col xs={4}>
                    <Form.Group className="mb-3" controlId="phoneNo">
                      <Form.Label>
                        Security code <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control type="number" placeholder="CVV" />
                    </Form.Group>
                  </Col>
                  <Col xs={2} style={{ margin: "auto" }}>
      
                  </Col>
                </Row>
              </Form>
            </div>
            </div>
            {/* PAYMENT OPTIONS WITH CHECKBOX -----END------ */}
          </Col>
          <Col md={1}></Col>
          <Col lg={4} md={6}>
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
              <input className="placeOrder" type="submit" style={{padding: '12px'}} value="Place Order" />
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
