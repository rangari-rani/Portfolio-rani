
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/rani-rangari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/ranirangari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faHackerrank} size="2x" />
          </a>
          <a
            href="mailto:ranirangari2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
    
        </div>
        <p className="text-sm text-center">
          © Rani Rangari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
