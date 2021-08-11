import React from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  const name = "Austin";
  const time = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {name}, it is currently {time.toLocaleString()}.
          <HomePage />
        </p>
      </header>
    </div>
  );
};

export default App;
