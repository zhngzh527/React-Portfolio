import React from "react";
import { Card } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ singleProject }) => {
  return (
    <Card
      style={{
        width: "20rem",
        margin: "20px 50px 20px 10px", backgroundColor: "#CFEE9E" 
      }}
      key={singleProject.title} className="col-3"
    >
    
      <Card.Title style={{ margin: "15px", fontSize: "27px", color: "#094067"}}>
        {singleProject.title}
      </Card.Title>
      <Card.Text className="mb-2 text-muted" style={{ fontSize: "15px", margin: "20px 0px 20px 10px" }}>{singleProject.summary}</Card.Text>
      <Card.Img
        variant="top"
        src={singleProject.image}
        alt={singleProject.title}
        style={{ position: "relative" }}
      />
      <Card.Body style={{ backgroundColor: "#CFEE9E"}}>
        <Card.Text style={{ fontSize: "17px" }} className="text-muted">
          {"Built with: "}
          <Card.Text style={{ fontSize: "15px" }} className="text-muted">{singleProject.technologies}</Card.Text>
        </Card.Text>
      </Card.Body>
      <Card.Footer
        style={{
          backgroundColor: "#CFEE9E",
          padding: "5px 20px 5px 20px",
        }}
      >
        <a href={singleProject.github} target="_blank" rel="noreferrer" className="card-text">
          <FaGithub style={{ fontSize: "30px" }}/>
        </a>
        <a
          href={singleProject.deployedLink}
          target="_blank" rel="noreferrer"
          className="card-text"
        >
          <FaExternalLinkAlt style={{ fontSize: "25px" }}/>
        </a>
      </Card.Footer>
   </Card>
  );
};

export default Projects;