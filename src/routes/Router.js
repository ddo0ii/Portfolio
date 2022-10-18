import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Navigation from "./Navigation";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Box component="main">
          <Toolbar />
          <Suspense fallback={<div>포트폴리오를 불러오고 있습니다...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Box>
      </Router>
    </>
  );
};

export default AppRouter;
