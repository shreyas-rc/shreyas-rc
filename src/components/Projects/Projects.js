import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={suicide}
              isBlog={false}
              title="Earth Engine Apps"
              description="Created Stand Alone Earth Engine Apps using GEE code editor, the Apps cater to a lot of individual Remote Sensing applications, some of them deal with climate related problems and some deal 
              with downloading and spectral signature processing of sentinel and landsat imagery."
              ghLink="https://github.com/shreyas-rc/GEE_Codes"
              demoLink="/shreyas-rc/apps"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Data Collection"
              description="These are IoT sensors that are currently live and sending values to the cloud every 30 seconds. Includes Air - Quality, Temperature, Humidity and Intensity of Light values, at the location 
              in the Demo Link. Feel free to visit and take a look. The Github link contains code and other individual libraries for each sensor with a brief"
              ghLink="https://github.com/shreyas-rc/IoT-SoC-for-Greenhouse-Monitoring"
              demoLink="https://thingspeak.com/channels/2341703"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CO2 Modelling Project"
              description="Jupyter Notebook Codes on Carbon dioxide modelling and data analysis. The data associcated, with the code is available in this GIT Repo, please explore and feel free to use and manipulate the code based on your needs. There are different codes for each task, for example, one Notebook each in time series forecasting for FbProhet model, one for ARIMA mode and one for RNN - LSTM.
              I've developed codes for filling Gaps in satellite images using Deep Learning as well."
              ghLink="https://github.com/shreyas-rc/CO2-_Solar_Induced_Fluroscence_ML-DL_Forecasting-and-Time-Series-Analysis"
              //demoLink=".."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web-GIS dashboard"
              description="This is Leaflet and Openlayers based WebGIS dashboard. Connected to a postGIS database and displays vector files. There is a need for a Geoserver in order to manipulate data styles."
              ghLink="https://github.com/shreyas-rc/Web_dashboard_leaflet"
              //demoLink=".."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="IoT"
              description="This is a customized C++ code for running on Atmega328-P for supporting more than capable number of sensors on 4kb Ram of the Microcontroller.
              This is highly optimized with custom libraries for supporting certain sensors without effecting the RAM memory much.
              You can check the Folder Final code for final output of the sensors."
              ghLink="https://github.com/shreyas-rc/IoT-SoC-for-Greenhouse-Monitoring"
              //demoLink=".."              
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
