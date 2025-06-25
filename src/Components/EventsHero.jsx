import React from "react";
import { Link } from "react-router";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import MagneticButton from "./MagneticButton";

const EventsHero = () => {
  const [text] = useTypewriter({
    words: ["Explore upcoming"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div className="relative h-[400px] md:h-[500px] w-full">
      {/* Background Image */}
      <img
        src="https://i.ibb.co/nqJbFZH0/sports.jpg"
        alt="Athletic Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl my-5 md:text-5xl font-extrabold text-center">
          <span className="text-[#251D64]">{text}</span>
          {text === "Explore upcoming" && (
            <span className="text-orange-500">&nbsp;athletic events</span>
          )}
          <Cursor />
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-6">
          Discover exciting sports events near you — from sprinting and swimming
          to long jumps. Book, compete, and stay active with FitArena.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/create-event">
            <MagneticButton buttonName='Create Event'></MagneticButton>
            {/* <button className="border border-black text-black hover:bg-white hover:text-black px-6 py-3 rounded transition">
              Create Event
            </button> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;
