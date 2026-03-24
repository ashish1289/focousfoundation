// import React from "react";
// import Home from "./pages/Home";
// import "./App.css";

// function App() {
//   return <Home />;
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import FocusSolutions from "./pages/FocusSolutions";
import BoardOfTrustees from "./pages/BoardOfTrustees";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/focus-solutions" element={<FocusSolutions />} />
        <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
