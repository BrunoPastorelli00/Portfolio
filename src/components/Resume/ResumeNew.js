import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import gmuLogo from "../../Assets/curriculo/gmulogo.png";
import stormKingLogo from "../../Assets/curriculo2/newsklogo.png";
import codeworksLogo from "../../Assets/curriculo2/codeworkslogonew.png";

function ResumeNew() {
  const education = [
    {
      school: "George Mason University",
      degree: "Bachelor of Business Administration - BBA",
      logo: gmuLogo,
      description: "A focus on Finance and International Business.",
      duration: null, // No specific duration provided
      customStyle: { paddingTop: '20px' } // Adjust padding to align the content lower
    },
    {
      school: "The Storm King School",
      degree: "High School",
      duration: "Sep 2020 - May 2021",
      logo: stormKingLogo,
      description: "Completed Junior Year with an emphasis on Advanced Placement courses.",
      customStyle: {}
    },
    {
      school: "Codeworks",
      degree: "Software Engineering, Computer Science",
      duration: null,
      logo: codeworksLogo,
      description: "Intensive programming bootcamp focused on full-stack development.",
      customStyle: {}
    }
  ];

  const skills = [
    "JavaScript", "HTML5", "CSS", "React.js", "Node.js", "MySQL", "MongoDB", "TypeScript"
  ];

  const styles = {
    skillText: {
      fontSize: "1.1rem",
      fontWeight: "normal",
      color: "#ddd",  // Assuming a dark background; adjust color accordingly.
      borderBottom: "1px solid #666",  // Subtle line to separate skills.
      padding: "8px 0"
    }
  };

  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Education</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {education.map((edu, index) => (
              <Col md={4} className="project-card" key={index}>
                <Card className="project-card-view">
                  <Card.Img variant="top" src={edu.logo} alt={`${edu.school} logo`} />
                  <Card.Body style={edu.customStyle}>
                    <Card.Title>{edu.degree}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                      {edu.description}
                      {edu.duration && <div><strong>Duration:</strong> {edu.duration}</div>}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h1 className="project-heading">
            My <strong className="purple">Skills</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={8}>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {skills.map((skill, index) => (
                  <li key={index} style={styles.skillText}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
