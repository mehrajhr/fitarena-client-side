import React from "react";
import logo from "../assets/fitarenalogo.png";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center  text-neutral-content bg-gray-800 rounded p-10">
      <div className="flex flex-col gap-3 justify-center items-center">
        <img src={logo} className="brightness-200 h-24" alt="" />
        <p className="text-white font-bold">
          Where Athletes Compete. Where Champions Begin.
        </p>
      </div>
      <div className="gap-3 md:gap-0 md:join">
        <input type="text" placeholder="Enter Email Address" className="bg-white text-black w-64 h-10  md:w-xl md:h-14 lg:w-3xl md:text-xl pl-5" />
        <button className="bg-orange-600 text-white btn md:h-14">Subscribe</button>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">Home</Link>
        <p>|</p>
        <Link to='/aboutUs' className="link link-hover">About Us</Link>
        <p>|</p>
        <Link to='/contact' className="link link-hover">Contact</Link>
        <p>|</p>
        <Link to='/faq' className="link link-hover">FAQ</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
            <FaFacebook className="w-10 h-10 hover:cursor-pointer" />
            <FaInstagram className="w-10 h-10 hover:cursor-pointer" />
            <FaTwitter className="w-10 h-10 hover:cursor-pointer" />
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          FITARENA
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
