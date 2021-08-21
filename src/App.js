import { React, useState } from "react";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, BrowserRouter, Route } from "react-router-dom";

const App = () => {
  const [active, setActive] = useState("");
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <header>
            <Header active={active} setActive={setActive} />
          </header>
          <Route path="/home" component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/about-me" component={AboutMe} />
          <footer>
            <Footer />
          </footer>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
