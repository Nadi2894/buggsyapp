import React from "react";
import Buggsyapp from "./Buggsyapp";
import "./App.css";
import Search from "./Search";
function App() {
  return (
    <div className="App">
      <header>
        <Buggsyapp />
        <Search />
      </header>
    </div>
  );
}

export default App;
