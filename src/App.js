import "./Header/Header";
import Header from "./Header/Header";
import Project from "./ProjectTile/ProjectTile";
import ProjectsList from "./ProjectsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      {ProjectsList.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </div>
  );
}

export default App;
