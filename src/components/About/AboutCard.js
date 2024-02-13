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
            <br /> I am a dedicated researcher driven by a profound love and unwavering passion for conducting high-quality research.
            I'm a research scholar at the <span className="purple"> University of Ghent, Belgium </span>. I study,
            Spatial and Acoustical Science. Waves and GIS are two fields that interests me.
            <br />
          
            <br />
            <br />
            My interests run wild, but deeply rooted to GIS and Science of WAVES :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> GIS - Climate research
            </li>
            <li className="about-activity">
              <ImPointRight /> WAVES research
            </li>
            <li className="about-activity">
              <ImPointRight /> Data collection &
            </li>
            <li className="about-activity">
              <ImPointRight /> Web application development
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
