import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetalis from "./pages/Details";
import MyList from "./pages/MyList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:movieid" element={<MovieDetalis />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </Router>
  );
};

export default App;
