import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/fitarenalogo.png";
import "../Styles/Navbar.css";
import UseAuth from "../Hooks/UseAuth";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { user, setUser, logOut } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log('user logout successfully');
        setUser(null);
      })
      .catch(() => {});
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/events/all">Events</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/create-event">Create Event</NavLink>
          </li>
          <li>
            <NavLink to="/myBookings">My Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/manageEvents">Manage Enents</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/aboutus">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img className="h-16" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <img
                className="w-12 h-12 border-2 border-primary rounded-full"
                src={user.photoURL}
                alt="user"
              ></img>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline hover:bg-blue-950 hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
        {user && (
          <div
            className={`fixed top-0 right-0 h-fit w-72 bg-base-200 shadow-lg p-6 z-50 transition-transform duration-700 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-5">
              <button
                onClick={handleLogOut}
                className="btn btn-outline hover:bg-blue-950 hover:text-white mt-4"
              >
                <CiLogout></CiLogout> Logout
              </button>
              <button
                className="btn btn-sm btn-circle text-blue-950"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-20 h-20 rounded-full mb-3"
              />
              <h3 className="text-2xl text-blue-950 font-bold">
                {user?.displayName}
              </h3>
              <p className="text-sm text-gray-500">{user?.email}</p>
              <button className="btn btn-primary bg-blue-950 mt-4">
                View Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
