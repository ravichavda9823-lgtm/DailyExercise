import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Bodypart from "./Pages/Bodypart";
import Execrcise from "./Pages/Exercise";
import Target from "./Pages/Target";
import BodypartbyTag from "./Pages/Bodypartbytag";
import Targetbytag from "./Pages/Targetbytag";
import Details from "./Pages/Details";
import Equipment from "./Pages/Equipment";
import Equipmentbytag from "./Pages/Equipmentbytag";
import SearchExe from "./Pages/SearchExe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bodypart" element={<Bodypart />} />
          <Route path="/exercise" element={<Execrcise />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/target" element={<Target />} />
          <Route path="/target" element={<Target />} />
          <Route path="/bodypartbytag/:bodypart" element={<BodypartbyTag />} />
          <Route path="/targetbytag/:target" element={<Targetbytag />} />
            <Route path="/equipment" element={<Equipment />} />
          <Route path="/equipmentbytag/:equipment" element={<Equipmentbytag />} />
          <Route path="/searchExe" element={<SearchExe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
