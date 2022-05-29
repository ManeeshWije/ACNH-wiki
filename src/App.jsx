import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Villagers from "./Components/Villagers";
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/villagers" element={<Villagers />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <hr className="m-auto w-75" />
      <br/>
      <Navigation />
      <Main/>
    </BrowserRouter>
  );
}

export default App;
