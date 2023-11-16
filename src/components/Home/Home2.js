import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
//import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let's Talk <span className="purple"> Spatially, </span> everything is!
            </h1>
            <p className="home-about-body">
              I am a spatial enthusiast, trying to link the environmental
              processes with each other. 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> QGIS, ESRI Suit of Softwares and Earth-Engine. </b>
              </i>
              <br />
              <br />
              I am on a mission to find&nbsp;
              <i>
                <b className="purple">climate solutions </b> and
                {" "}
                <b className="purple">
                accountability of organizations involved.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also try to develop Web-GIS dashboards with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <b className="about-windy">Windy - API</b>
          <iframe width="350" height="300" src="https://embed.windy.com/embed2.html?lat=17.592&lon=78.138&detailLat=17.456&detailLon=78.201&width=350&height=350&zoom=9&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1" title="Windy Map" frameborder="0">
          </iframe> 
            <br></br> 
            <br></br>
          <a className="iot-data" href="https://thingspeak.com/channels/2341703" target="_blank"> 
          Find here real - time climatic data (IoT installed by me)
          </a>
          </Col>
          <Col md={12} className="home-about-social">
            <h1>Media</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shreyas-rc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/shreyas_r_c"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shreyas-rc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shreyas_rc/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
