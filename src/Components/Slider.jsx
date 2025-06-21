import React from "react";
import { Link } from "react-router";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  // Array of slides to map through
  const slides = [
    {
      title: "Brilliant Sports Club Amenities",
      eventTitle: "Urban Hoops Showdown",
      description: "3-on-3 basketball tournament. Show your street skills.",
      logo: "https://i.ibb.co/NdPBjN32/download.jpg",
      playerImg: "https://i.ibb.co/9HzthBFG/download-1.jpg", // Replace with your actual
    },
    {
      title: "Dash & Burn Challenge",
      description: "A sprint endurance battle for speed demons.",
      logo: "https://i.ibb.co/MyqnpQpg/download-2.png",
      playerImg: "https://i.ibb.co/GQ0NSjL5/download-2.jpg",
    },
    {
      title: "PowerFit Throwdown",
      description: "Strength meets willpower in this elite lifting event.",
      logo: "https://i.ibb.co/bgCpNwxz/download-3.jpg",
      playerImg: "https://i.ibb.co/tpTvxN2K/images-1.jpg",
    },
  ];

  return (
    <Slide {...properties} autoplay={true} duration={4000} arrows={true}>
      {slides.map((slide, idx) => (
        <div key={idx} className="p-10 pb-16 bg-[#251d64] flex justify-between items-center">
          <div className="flex-1 flex gap-10">
            <img
              src={slide.logo}
              className="w-24 h-24 rounded-full"
              alt=""
            />
            <div>
              <h1 className="text-3xl font-bold text-white">
               {slide.title}
              </h1>
              <Link to="/events/all">
                <button className="btn mt-5 btn-dash btn-warning">
                  Book A Event
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-0 join">
            <div className="relative w-[150px] h-[220px] overflow-hidden rounded-tr-[90px]">
              <img
                src={slide.playerImg}
                alt="Player"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 border-t border-b border-r border-orange-700 w-sm">
              <h1 className="text-white font-bold text-xl">Event:</h1>
              <p className="text-white">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default Slider;
