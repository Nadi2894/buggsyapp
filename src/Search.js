import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          placeholder="Search tickets "
          className="search-input"
        />
      </form>
    </div>
  );
}
