import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default AppRouter;
