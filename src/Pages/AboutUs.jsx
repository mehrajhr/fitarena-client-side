import React from "react";
import { Link } from "react-router";
import Stat from "../Components/Stat";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-200 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto bg-base-100 p-10 rounded-xl shadow-lg">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4">About FitArena</h2>
        <p className="text-center text-gray-500 mb-10">
          Connecting athletes and sports enthusiasts with local events,
          competitions, and challenges.
        </p>
        <Stat></Stat>
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Mission */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              At <strong>FitArena</strong>, we believe sports and competition
              create strong communities. Our platform empowers athletes to
              discover, book, and participate in local athletic events with
              ease. Whether you're a beginner or a pro, we aim to bring
              opportunities closer to your arena.
            </p>
          </div>

          {/* Right Side - Values / Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li>Easy event discovery and booking</li>
              <li>Verified local competitions</li>
              <li>User profiles and booking history</li>
              <li>Secure authentication and data handling</li>
              <li>Mobile-friendly, clean UI</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold mb-2">Ready to Compete?</h4>
          <p className="mb-4 text-gray-500">
            Join FitArena and experience the thrill of local sports!
          </p>
          <Link to='/events/all' className="btn btn-primary">
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
