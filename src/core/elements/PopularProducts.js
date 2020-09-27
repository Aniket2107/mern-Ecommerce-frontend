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
            <div className="small-product-card d-flex justify-content-center align-items-center">
              <img
                src="/images/p1.webp"
                alt="product1"
                style={{ width: "90%", height: "80%" }}
              />
            </div>
            <br />
            <div>
              <h5>Blue Sneakers</h5>
              <p>
                <big>$4.50</big> <s>$5.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center">
              <img
                src="/images/p2.webp"
                alt="product1"
                style={{ width: "90%", height: "80%" }}
              />
            </div>
            <br />
            <div>
              <h5>Sneakers</h5>
              <p>
                <big>$27.00</big> <s>$35.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center">
              <img
                src="/images/p3.webp"
                alt="product1"
                style={{ width: "90%", height: "80%" }}
              />
            </div>
            <br />
            <div>
              <h5>Black sneaker unisex</h5>
              <p>
                <big>$39.99</big> <s>$50.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center">
              <img
                src="/images/p4.webp"
                alt="product1"
                style={{ width: "90%", height: "80%" }}
              />
            </div>
            <br />
            <div>
              <h5>Sport shoe for men</h5>
              <p>
                <big>$39.99</big> <s>$50.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center">
              <img
                src="/images/p9.jpg"
                alt="product1"
                style={{ width: "90%", height: "80%" }}
              />
            </div>
            <br />
            <div>
              <h5>Black loafers</h5>
              <p>
                <big>$39.99</big> <s>$50.00</s>
              </p>
            </div>
            <br />
          </div>
          <div className="col-sm-4 m-auto hover-shadow">
            <div className="small-product-card d-flex justify-content-center align-items-center">
              <img
                src="/images/p7.jpg"
                alt="product1"
                style={{ width: "90%", height: "80%" }}
              />
            </div>
            <br />
            <div>
              <h5>Brown formal shoe</h5>
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
