import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
const Navigation = lazy(() => {
  return Promise.all([
    import("./Navigation"),
    new Promise((resolve) => setTimeout(resolve, 10)), //3000
  ]).then(([moduleExports]) => moduleExports);
});

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Navigation />
      </Suspense>
    </Router>
  );
};

export default AppRouter;
