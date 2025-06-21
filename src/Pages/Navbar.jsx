import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../assets/fitarenalogo.png';
import '../Styles/Navbar.css'

const Navbar = () => {
    const links = (
        <>
        <li>
            <NavLink  to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to='/events/all'>Events</NavLink>
        </li>
        </>
    )
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
         {
            links
         }
          </ul>
        </div>
        <div>
            <img className="h-16" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/register" className="btn btn-outline hover:bg-blue-950 hover:text-white">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
