import React from "react";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div>
      <div className="container title">
        <h2>Portfolio</h2>
      </div>
      <div className="container text">
        <Project />
      </div>
    </div>
  );
}
