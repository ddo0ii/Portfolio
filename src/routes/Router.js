import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navigation />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </Suspense> */}
      </Router>
    </>
  );
};

export default AppRouter;
