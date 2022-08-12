import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="footerLogo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, et
            culpa animi quos at enim, quisquam officia cum amet quibusdam
            excepturi architecto deserunt porro non voluptate suscipit dolor.
            Aliquid, commodi.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="footer__icon" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook className="footer__icon" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineInstagram className="footer__icon" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter className="footer__icon" />
            </a>
          </div>
        </article>
        <article>
          <h4>PermaLinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Students</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/s">Suppport</Link>

          <Link to="/contact">Contact</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 Thirosh Madhusha &copy; All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
