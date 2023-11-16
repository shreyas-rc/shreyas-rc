import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SHREYAS R C </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br /> I am a research scholar at Indian Institute of Technology Hyderabad,
            in the department of Climate Change. I'm a part of Greenko-School of Sustainability.
            I'm in love with the way the spatial science can solve the whole of world's problem!
            <br />
          
            <br />
            <br />
            My interests run wild, but deeply rooted to GIS science:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Climate research
            </li>
            <li className="about-activity">
              <ImPointRight /> Web-based GIS technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Data collection
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The application of GIS is limited only by imagination of those who use it!"{" "}
          </p>
          <footer className="blockquote-footer">Jack Dangermond, ESRI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
