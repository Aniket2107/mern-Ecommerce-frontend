import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Hero from "./elements/Hero";
import DiscoverCollection from "./elements/DiscoverCollection";
import PopularProducts from "./elements/PopularProducts";

const Home = () => {
  return (
    <React.Fragment>
      <Menu />
      <Hero />
      <DiscoverCollection />
      <PopularProducts />
    </React.Fragment>
  );
};

export default Home;
