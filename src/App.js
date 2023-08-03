import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Header } from "./components/Header";
import { Home } from "./components/Home";
import ReactNavbar from "./lib/ReactNavbar";
import "core-js/stable";
import "regenerator-runtime/runtime";

import './styles/app.scss';
// import "overlay-navbar/ReactNavbar.min.css";

function App() {
  return (
    <Router>
      < ReactNavbar/>
      <Routes>
        <Route path={'/*'} element={<Home/>} />
      </Routes>
    </Router>

  );
}

export default App;
