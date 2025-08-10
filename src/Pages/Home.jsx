import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Slider from "../Components/Slider";
import Banner from "../Components/Banner";
import Testimonials from "./Testimonials";
import PopularSports from "./PopularSports";
import axios from "axios";
import FeaturedEvents from "../Components/FeaturedEvents";
import TipsAndTraining from "../Components/TipsAndTraining";
const Home = () => {
  const [events , setEvents] = useState([]);
  useEffect(() =>{
    axios.get('https://fitarena-server.vercel.app/events/all')
    .then(res => setEvents(res.data));
  },[])
  return (
    <div className="my-5">
      <Slider></Slider>
      <FeaturedEvents events={events}></FeaturedEvents>
      <Banner></Banner>
      <Testimonials></Testimonials>
      <PopularSports></PopularSports>
      <TipsAndTraining></TipsAndTraining>
    </div>
  );
};

export default Home;
