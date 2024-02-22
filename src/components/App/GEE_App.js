import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const iframeSrc = 'https://1616shreyas.users.earthengine.app/view/dtr'
  const iframeSrc1 ='https://1616shreyas.users.earthengine.app/view/rangelandfractionalcover'
  return (
    <Container fluid className="project-section">
        <h1 className="project-heading">
          EARTH ENGINE <strong className="purple">APPS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a few of Earth Engine Apps developed by me (This Page can be best viewed on a desktop).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <h3 style={{ justifyContent: "top-left", color: "white" }}>
        <strong className="purple">Diurnal Temperature Range Explorer </strong> - <strong className="purple"><a href="https://1616shreyas.users.earthengine.app/view/dtr" target="_blank" rel="noreferrer">Link </a></strong> 
        </h3>
        </Row>
      <div>
        <iframe
          title="ExternalApp"
          src={iframeSrc}
          width="100%" 
          height="900" 
          frameBorder="0" 
          allowFullScreen 
        />
      </div>
        <p></p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <h3 style={{ justifyContent: "top-left", color: "white" }}>
        <strong className="purple">Rangeland Fractional Cover </strong> - <strong className="purple"><a href="https://1616shreyas.users.earthengine.app/view/rangelandfractionalcover" target="_blank" rel="noreferrer">Link </a></strong> 
        </h3>
        </Row>
      <div>
        <iframe
          title="ExternalApp"
          src={iframeSrc1}
          width="100%" 
          height="900" 
          frameBorder="0" 
          allowFullScreen 
        />
      </div>

      <Particle/>
      <Container>
      </Container>
    </Container>
  );
  
}

export default Projects;

// class IframeContainer extends React.Component {
//   render() {
//     const iframeSrc = 'https://1616shreyas.users.earthengine.app/view/dtr'; // Replace with the URL of the app you want to host

//     return (
//       <div>
//         <Particle />
//         <h1 className="project-heading">
//            EARTH ENGINE <strong className="purple">APPS </strong>
//         </h1>
//          <p style={{ color: "white" }}>
//            Here are a few of the Earth Engine Apps that I've created.
//          </p>
//          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

//        <p style={{ justifyContent: "top-left", color: "white" }}>
//           Diurnal Temperature Range Explorer - <strong className="purple"><a href="https://1616shreyas.users.earthengine.app/view/dtr">Link </a></strong> 
//            to <strong className="purple"><a href="https://1616shreyas.users.earthengine.app/view/dtr"> Application </a></strong> 
//         </p>
//          </Row>
    
//         <iframe
//           const iframeSrc = 'https://1616shreyas.users.earthengine.app/view/dtr'
//           title="ExternalApp"
//           src={iframeSrc}
//           width="800" // Set the width as needed
//           height="600" // Set the height as needed
//           frameBorder="0" // Remove iframe border
//           allowFullScreen // Allow fullscreen mode if needed
//         />
//       </div>
//     );
//   }
// }

// export default IframeContainer;

