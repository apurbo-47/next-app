import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

import logo from "../../public/images/22a070fdd2e2a2d134a280d9c8a6959ae09e226e.png";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: "url('/images/image1978.png')",
        backgroundSize: "cover",
        height: "90px",
      }}
    >
      <div className="footer-container p-5 gap-5 md:gap-56">
        {/* Logo */}

        <Image
          className="bg-white rounded-lg w-12 h-12"
          src={logo}
          alt="logo"
        />

        {/* Menu */}
        <ul className="footer-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        {/* Social Icons */}
        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
