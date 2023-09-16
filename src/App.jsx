import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Team from "./Pages/Team";
import Sponsors from "./Pages/Sponsors";

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/blog" class="list">
            Blog
          </Link>
          <Link to="/team" class="list">
            Team
          </Link>
          <Link to="/contact" class="list">
            Contact
          </Link>
          <Link to="/about" class="list">
            About
          </Link>
        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

