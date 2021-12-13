import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../images/backBtn.png";
import CrabLegs from "../images/crabLegs.png";
import GrilledFish from "../images/grilledFish.png";
import "./dev.css";
import { Form, Button, Row, Col, Container, Table } from "react-bootstrap";

const Cart = () => {
  return (
    <>
      <div className="tab">
        <div className="backBtn">
          <Link to="/">
            <img className="backArrow" src={Arrow} />
          </Link>
        </div>
        <h1>Your Cart</h1>
      </div>
      {/* Cart Items Details */}
      {/* <div className="mainContainer">
          <div className="leftSide"> */}
      <Container style={{marginBottom: '2rem'}}>
        <Row>
          <Col lg={7} md={6}>
            <div className="cartPage">
              <Table responsive className="w-100">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>
                    <div className="cartInfo">
                      <img src={CrabLegs} />
                      <div>
                        <h3>Crab Legs</h3>
                      </div>
                    </div>
                  </td>
                  <td>$19.99</td>
                  <td>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </td>
                  <td>$19.99</td>
                </tr>
                <tr>
                  <td>
                    <div className="cartInfo">
                      <img src={GrilledFish} />
                      <div>
                        <h3>Grilled Fish</h3>
                      </div>
                    </div>
                  </td>
                  <td>$11.99</td>
                  <td>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </td>
                  <td>$11.99</td>
                </tr>
              </Table>
            </div>
          </Col>
          <Col lg={5} md={6}>
            {/* <div className="rightSide"> */}
            <div className="deliveryText">
              <h1>Delivery Charges</h1>
              <h4>Free Delivery</h4>
            </div>

            <div className="deliverySubtotal">
              <h3>Subtotal</h3>
              <h3>$31.98</h3>
            </div>
            <div className="deliverySubtotal">
              <h3>Total</h3>
              <h3>$31.98</h3>
            </div>
            <Link className="linko" to="/checkout">
              Proceed to Checkout
            </Link>
            {/* </div> */}
          </Col>
        </Row>
      </Container>

      {/* </div> */}
      {/* <div className="centerLine"></div> */}
      {/* leftside */}

      {/* </div> */}
    </>
  );
};

export default Cart;
