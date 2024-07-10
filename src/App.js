import React from "react";
import Buggsyapp from "./Buggsyapp";
import "./App.css";
import Search from "./Search";
import { Table } from "./Table";

function App() {
  return (
    <div className="App">
      <header>
        <Buggsyapp />
        <Search />
        <Table />
      </header>
    </div>
  );
}

export default App;
