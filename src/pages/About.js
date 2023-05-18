import React from "react";
import profile from "/assets/images/profile.png";

export default function About() {
  return (
    <main>
      <div className="title container">
        <h2>About Me</h2>
      </div>
      <div className="container">
        <img src={profile} alt="profile" id="profile"></img>
        <p className="text">
          Hello! My name is Luba Mintsys. I am coming from a psychology field,
          but have always been interested in programming. I have been working
          with C#, HTML, CSS, and JavaScript. I am also experienced with Aodbe
          Photoshop and Adobe Illustrator.
        </p>
      </div>
    </main>
  );
}
