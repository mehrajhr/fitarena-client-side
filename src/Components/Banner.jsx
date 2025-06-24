import React from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="my-5 flex flex-col lg:flex-row gap-5 md:p-10 bg-base-200">
      <div className="flex-1 grid grid-cols-3 grid-rows-1 gap-4">
        <div className="col-span-1 flex flex-col gap-4">
          <img
            className="w-full rounded-md  h-full object-cover"
            src={image1}
            alt="image1"
          />
          <img
            className="w-full rounded-md h-full object-cover"
            src={image2}
            alt="imgage2"
          />
        </div>
        <div className="col-span-2">
          <img
            className="object-cover w-full rounded-md h-full"
            src={image3}
            alt="image3"
          />
        </div>
      </div>
      <div className="flex-1 space-y-7">
        <h1 className="text-4xl font-bold">
          Stay connected. Stay active. Play hard.
        </h1>
        <p className="text-gray-700">
          At FitArena, we believe sports bring people together, fuel passion,
          and build confidence. Whether you're training, competing, or just
          having fun, our vibrant community supports you every step of the way.
          With access to top-tier events, facilities, and team activities —
          there's always something to keep you motivated and moving forward.
        </p>
        <Link to="/events/all">
          <button className="btn px-10 bg-orange-600 text-white text-xl hover:bg-white hover:text-black py-6">
            Find Out More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
