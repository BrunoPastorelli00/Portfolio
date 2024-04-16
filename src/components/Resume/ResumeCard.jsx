import React from "react";
import Card from "react-bootstrap/Card";

function ResumeCard({ imgPath, title, description }) {
  return (
    <Card className="resume-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ResumeCard;
