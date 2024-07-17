import React from "react";
import Buggsyapp from "./Buggsyapp";
import "./App.css";
import Search from "./Search";
import { PaginationTable } from "./PaginationTable";

function App() {
  return (
    <div className="App">
      <header>
        <Buggsyapp />
        <Search />
        <PaginationTable />
      </header>
    </div>
  );
}

export default App;
