import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Webvitals from "./Components/Webvitals";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Webvitals />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
