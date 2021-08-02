import React from "react";

const App = () => {
  const name = "Austin";
  const time = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {name}, it is currently {time.toLocaleString()}.
        </p>
      </header>
    </div>
  );
};

export default App;
