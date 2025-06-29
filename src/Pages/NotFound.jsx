import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center px-4">
      {/* <img
        src="https://i.ibb.co/x8N5GfN/404-garden.png"
        alt="404"
        className="w-96 max-w-full mb-8"
      /> */}
      <h1 className="text-9xl font-bold text-blue-700 mb-4">404</h1>
      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        The page you’re looking for doesn’t exist or might have been removed.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
      >
        <FaArrowLeft /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;