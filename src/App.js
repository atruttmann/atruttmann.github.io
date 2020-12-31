import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header/Header";
import Project from "./ProjectTile/ProjectTile";
import ProjectsList from "./ProjectsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Container fluid className="appInner">
        <Row>
          <Header />
        </Row>
        <Row xs={1} sm={1} md={2} lg={2} xl={3}>
          {ProjectsList.map((project) => (
            <Col className="projectColumn" key={project.title}>
              <Project project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
