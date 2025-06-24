import React from "react";
import { Link } from "react-router";
import Slider from "../Components/Slider";
import Stat from "../Components/Stat";
import Banner from "../Components/Banner";
import Testimonials from "./Testimonials";
import PopularSports from "./PopularSports";
const Home = () => {
  return (
    <div className="my-5">
      <Slider></Slider>
      <Banner></Banner>
      <Testimonials></Testimonials>
      <PopularSports></PopularSports>
    </div>
  );
};

export default Home;
