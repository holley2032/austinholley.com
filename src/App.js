import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <HomePage />
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
