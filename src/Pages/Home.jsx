import React from "react";
import { Link } from "react-router";
import Slider from "../Components/Slider";
import Stat from "../Components/Stat";
import Banner from "../Components/Banner";
const Home = () => {
  return (
    <div className="my-5">
      <Slider></Slider>
      <Banner></Banner>
      <Stat></Stat>
    </div>
  );
};

export default Home;
