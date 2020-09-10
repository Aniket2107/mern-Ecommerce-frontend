import React, { Component } from "react";
import "../../assests/styles/home.css";

function ProjectHeading() {
  return (
    <div>
      <h1 style={{ borderLeft: "7px solid red", padding: "0 5vh" }}>
        Popular Products
      </h1>
    </div>
  );
}

function ProjectCards() {
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="row">
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center"></div>
            <br />
            <div>
              <h5>Product 1</h5>
              <p>
                <big>$4.50</big> <s>$5.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center"></div>
            <br />
            <div>
              <h5>Product 2</h5>
              <p>
                <big>$27.00</big> <s>$35.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center"></div>
            <br />
            <div>
              <h5>Product 3</h5>
              <p>
                <big>$39.99</big> <s>$50.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center"></div>
            <br />
            <div>
              <h5>Product 4</h5>
              <p>
                <big>$39.99</big> <s>$50.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center"></div>
            <br />
            <div>
              <h5>Product 5</h5>
              <p>
                <big>$39.99</big> <s>$50.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center"></div>
            <br />
            <div>
              <h5>Product 6</h5>
              <p>
                <big>$39.99</big> <s>$50.00</s>
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default class PopularProducts extends Component {
  render() {
    return (
      <div className="container-fluid discover-collection-container">
        <div className="container">
          {ProjectHeading()}
          <br />
          {ProjectCards()}
        </div>
      </div>
    );
  }
}
