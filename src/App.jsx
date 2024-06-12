import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./router/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
