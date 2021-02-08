import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header/Header";
import Project from "./ProjectTile/ProjectTile";
import ProjectsList from "./Projects/ProjectsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const password = "IntuitWork";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="app">
      <Container fluid className="appInner">
        <Row>
          <Header />
        </Row>
        <Row xs={1} sm={1} md={2} lg={2} xl={3}>
          {ProjectsList.map((project) => (
            <Col className="projectColumn" key={project.title}>
              <Project
                project={project}
                authenticated={authenticated}
                authenticate={(userInput) => {
                  const isAuthenticated = userInput === password;
                  setAuthenticated(isAuthenticated);
                  return isAuthenticated;
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="footer">
        <p className="body2">
          <i>
            This website was designed and built by me! Check out the code on{" "}
            <a href="https://github.com/atruttmann/atruttmann.github.io">
              GitHub
            </a>
            .
          </i>
        </p>
      </div>
    </div>
  );
}

export default App;
