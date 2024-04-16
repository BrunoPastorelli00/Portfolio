import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coursecord from "../../Assets/Projects/coursecord.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursecord}
              isBlog={false}
              title="Coursecord"
              description="an e-learning management system fully written in Typescript, where organisations can create and maintain different courses for their student audiences, which can be quickly updated via the use of an online Markdown editor."
              ghLink="https://github.com/simplyjuanc/Coursecord"
              demoLink="https://github.com/simplyjuanc/Coursecord"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
