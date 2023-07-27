import React from "react";
import "../Skillcard/Skillcard.css";
import python from "../../assets/py.png";
import cpp from "../../assets/cpp.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import mongo from "../../assets/mongo.png";
import sql from "../../assets/sql.png";
import node from "../../assets/node.png";
import git from "../../assets/git.png";
const Skillcard = () => {
  return (
    <div className="container" id="skills">
      <h1>
        My <span>Skills</span>
      </h1>
      <div className="cards">
        <div className="items">
          <img src={python} alt="python" />
          <h3>Python</h3>
        </div>
        <div className="items">
          <img src={cpp} alt="C++" />
          <h3>C++</h3>
        </div>
        <div className="items">
          <img src={js} alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>
        <div className="items">
          <img src={react} alt="React JS" />
          <h3>React JS</h3>
        </div>
        <div className="items">
          <img src={mongo} alt="python" />
          <h3>MongoDB</h3>
        </div>
        <div className="items">
          <img src={sql} alt="C++" />
          <h3>SQL</h3>
        </div>
        <div className="items">
          <img src={node} alt="JavaScript" />
          <h3>Node JS</h3>
        </div>
        <div className="items">
          <img src={git} alt="React JS" />
          <h3>Git</h3>
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
