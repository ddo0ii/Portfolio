import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
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
        </Routes>
        {/* </Suspense> */}
      </Router>
    </>
  );
};

export default AppRouter;
