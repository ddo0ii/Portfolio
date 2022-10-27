import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Career from "../pages/Career";
// import Projects from "../pages/Projects";
// import Activities from "../pages/Activities";
// import ALC from "../pages/ALC";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navigation />
        {/* <Box component="main">
          <Toolbar />
          <Suspense fallback={<div>포트폴리오를 불러오고 있습니다...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/alc" element={<ALC />} />
            </Routes>
          </Suspense>
        </Box> */}
      </Router>
    </>
  );
};

export default AppRouter;
