import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="huddle">
        <img className="huddle--img" src="images/logo1.svg" alt="" />
        <div className="huddle--1">
          <img src="images/icon-location.svg" alt="" />
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h3>
        </div>
        <div className="huddle--2">
          <img src="images/icon-phone.svg" alt="" />
          <h3>+1-543-123-4567</h3>
        </div>
        <div className="huddle--3">
          <img src="images/icon-email.svg" alt="" />
          <h3>example@huddle.com</h3>
        </div>
      </div>
      <div className="us">
        <h3>About Us</h3>
        <h3>What We Do</h3>
        <h3>FAQ</h3>
      </div>
      <div className="blog">
        <h3>Career</h3>
        <h3>Blog</h3>
        <h3>Contact Us</h3>
      </div>
      <div className="icon">
        <div className="icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <h3 className="icon--text">
          Coded by <a href="https://twitter.com/Mackson_4">Mackson</a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
