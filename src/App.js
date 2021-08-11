import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";

const App = () => {
  const name = "Austin";
  const time = new Date();

  return (
    <div className="App">
      <p>
        Hello {name}, it is currently {time.toLocaleString()}.
        <HomePage />
      </p>
    </div>
  );
};

export default App;
