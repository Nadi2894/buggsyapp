import React from "react";
import "./Buggsyapp.css";
import Mylogo from "./images/Mylogo.jpg";
import { Table } from "./Table";

export default function Buggsyapp() {
  return (
    <div className="container">
      <ul>
        <img src={Mylogo} alt="" width={150} />
        <li>Tickets</li>
        <li>New tickets</li>
        <li>Reports</li>
      </ul>
      <Table />
    </div>
  );
}
