import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          className="search-input"
          placeholder="Search Tickets"
        />
      </form>
    </div>
  );
}
