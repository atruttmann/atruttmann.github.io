import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Header from "./components/Header/Header";
import ProjectTile from "./components/ProjectTile/ProjectTile";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Link from "./components/Link/Link";
import ProjectsList from "./projects";
import useTheme from "./utils/useTheme";
import "./App.scss";

const password = "helloworld";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [darkTheme, setDarkTheme] = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(ProjectsList[0]);

  return (
    <div className={`app ${darkTheme ? "theme-dark" : "theme-light"}`}>
      <div className="appContainer">
        <button
          className="themeToggle"
          onClick={() => setDarkTheme(!darkTheme)}
          aria-label="Change theme"
          title="Change theme"
        >
          {darkTheme ? <FaSun /> : <FaMoon />}
        </button>

        <Header />

        <div className="projectsGrid">
          {ProjectsList.map((project) => (
            <ProjectTile
              key={project.title}
              project={project}
              setSelectedProject={setSelectedProject}
              setModalOpen={() => setModalOpen(true)}
            />
          ))}
        </div>

        <div className="footer">
          <p className="body2">
            I designed and built this website from scratch! Check out the code
            on{" "}
            <Link href="https://github.com/atruttmann/atruttmann.github.io">
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        closeModal={() => setModalOpen(false)}
        authenticated={authenticated}
        authenticate={(userInput) => {
          const isAuthenticated = userInput === password;
          setAuthenticated(isAuthenticated);
          return isAuthenticated;
        }}
      />
    </div>
  );
}

export default App;
