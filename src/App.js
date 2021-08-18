import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <header>
            <Header />
          </header>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <footer>
            <Footer />
          </footer>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
