import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Project() {
  const data = [
    {
      name: "Horiseon - code refactor",
      github: "https://github.com/lmintsys/horiseon-code-refactor",
      link: "https://lmintsys.github.io/horiseon-code-refactor/",
      img: "/assets/images/horiseon.jpg",
    },
    {
      name: "Password Generator",
      github: "https://github.com/lmintsys/password-generator",
      link: "https://lmintsys.github.io/password-generator/",
      img: "/assets/images/password-generator.png",
    },
    {
      name: "API Weather Dashboard",
      github: "https://github.com/lmintsys/api-weather-dashboard",
      link: "https://lmintsys.github.io/api-weather-dashboard/",
      img: "/assets/images/weather.png",
    },
    {
      name: "Workday Scheduler",
      github: "https://github.com/lmintsys/work-day-scheduler",
      link: "https://lmintsys.github.io/work-day-scheduler/",
      img: "/assets/images/scheduler.png",
    },
    {
      name: "Melody Match",
      github: "https://github.com/team-2-project/Melody-Match",
      link: "https://team-2-project.github.io/Melody-Match/",
      img: "/assets/images/melody-match.png",
    },
    {
      name: "Scriptomatic",
      github: "https://github.com/ScriptoNaughts/Scriptomatics",
      link: "https://shrouded-garden-51163.herokuapp.com/",
      img: "/assets/images/scriptomatic.png",
    },
  ];
  const projectInfo = data.map((project) => {
    return (
      <div className="col">
        <div className="card">
          <img
            className="card-img-top"
            src={project.img}
            alt={project.name}
          ></img>
          <div className="card-body">
            <h3 className="card-title">
              <a href={project.link}>{project.name}</a>{" "}
              <a href={project.github}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container" id="portfolio-container">
      <div className="row row-cols-1 row-cols-md-2 g-5">{projectInfo}</div>
    </div>
  );
}
