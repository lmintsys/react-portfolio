import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
      id="footer"
    >
      <div>
        <a href="https://github.com/lmintsys" className="social-media">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/luba-mintsys/"
          className="social-media"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
        <a
          href="https://stackoverflow.com/users/21910018/lumin"
          className="social-media"
        >
          <FontAwesomeIcon icon={faStackOverflow} size="2xl" />
        </a>
      </div>
    </footer>
  );
}
