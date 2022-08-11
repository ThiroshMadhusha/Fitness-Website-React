import React from "react";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
    </BrowserRouter>
  );
};

export default App;
