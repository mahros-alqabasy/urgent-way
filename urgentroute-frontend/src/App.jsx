import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MapView from "./pages/MapView";
import Landing from "./pages/Landing";
import HowItWorks from "./pages/HowItWorks";
import ChooseLocation from "./pages/ChooseLocation";

const App = () => {
  return (
    <Router basename="/urgent-way/">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/choose-location" element={<ChooseLocation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
