import React, { Component } from "react";
import DiscoverLink from "./DiscoverLink";

function collectionHeading() {
  return (
    <div>
      <h1 style={{ borderLeft: "7px solid red", padding: "0 5vh" }}>
        DISCOVER <br /> THE COLLECTION
      </h1>
    </div>
  );
}

function CollectionCards() {
  return (
    <div className="row">
      <div className="col-md-8 col-sm-12 m-auto">
        <div
          className="big-product-card d-flex justify-content-center align-items-center"
          style={{ background: "url(/images/c1.jpg)", backgroundSize: "cover" }}
        >
          <DiscoverLink text="Collection 1" link="products" span="25" />
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="row">
          <div className="col-sm-12 m-auto">
            <div
              className="small-product-card d-flex justify-content-center align-items-center"
              style={{
                background: "url(/images/c2.jpg)",
                backgroundSize: "cover",
              }}
            >
              <DiscoverLink text="Collection 2" link="products" span="12" />
            </div>
          </div>
          <div className="col-sm-12 m-auto">
            <div
              className="small-product-card d-flex justify-content-center align-items-center"
              style={{
                background: "url(/images/c3.jpg)",
                backgroundSize: "cover",
              }}
            >
              <DiscoverLink text="Collection 3" link="products" span="36" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class DiscoverCollection extends Component {
  render() {
    return (
      <div className="container-fluid discover-collection-container">
        <div className="container">
          {collectionHeading()}
          <br />
          {CollectionCards()}
        </div>
      </div>
    );
  }
}
