import React from "react";
import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Program from "../../components/Program";
import Testimonials from "../../components/Testimonials";
import Values from "../../components/Values";
import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Program />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
