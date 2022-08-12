import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/header/mainheader.png";
// import ImageTop from "../assets/header/mainheaderfront.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The World Fitness</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            deleniti doloremque eius neque inventore consectetur placeat dolorum
            accusantium adipisci odio sequi aut sequi! Vero, doloremque eius
            neque inventore adipisci odio sequi obcaecati expedita quasi.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img className="headerimg" src={Image} alt="MainHeaderImage" />
              {/* <img className="headerimg1" src={ImageTop} alt="MainHeaderImageFront" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
