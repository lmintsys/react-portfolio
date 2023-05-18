import React from "react";
import resume from "../assets/files/resume.pdf";

export default function Resume() {
  const frontEnd = [
    "HTML",
    "CSS",
    "JavaScript",
    "JQuery",
    "Responsive Design",
    "React",
    "Bootstrap",
    "Bulma",
  ];
  const backEnd = [
    "API",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "REST",
    "GraphQL",
  ];
  const fronProf = frontEnd.map((prof) => {
    return <li>{prof}</li>;
  });
  const backProf = backEnd.map((prof) => {
    return <li>{prof}</li>;
  });
  return (
    <div>
      <div class="title container">
        <h2>Resume</h2>
      </div>
      <div class="container text">
        <h3>
          Download my resume <a href={resume}>here</a>
        </h3>
        <br></br>
        <h3>Front-end Proficiencies</h3>
        <ul>{fronProf}</ul>
        <h3>Back-end Proficiencies</h3>
        <ul>{backProf}</ul>
      </div>
    </div>
  );
}
