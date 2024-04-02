import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaPhoneVolume } from "react-icons/fa6";
import { IoLogoInstagram, IoMailUnreadOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <hr className="lines" />
      <div className="footer">
        <h4>Contact Us</h4>
          <NavLink to="tel:+91 76192 20543" target="_blank">
            <FaPhoneVolume className="icons phone" />
          </NavLink>
          <NavLink to="https://cares@sharepal.in" target="_blank">
            <IoMailUnreadOutline className="icons mail" />
          </NavLink>
          <NavLink to="https://www.facebook.com/Sharepal.in" target="_blank">
            <FaFacebookF className="icons facebook" />
          </NavLink>
          <NavLink to="https://www.instagram.com/sharepal.in/" target="_blank">
            <IoLogoInstagram className="icons instagram" />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/company/sharepal/"
            target="_blank"
          >
            <FaLinkedin className="icons linkedin" />
          </NavLink>
        <p>© 2023 Sharepal. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
