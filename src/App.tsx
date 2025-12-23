import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import mixpanel from "mixpanel-browser";
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

  useEffect(() => {
    // Disable password protection in development mode
    if (window.location.hostname === "localhost") {
      setAuthenticated(true);
    }
    // Only track Mixpanel events in production mode
    else {
      mixpanel.init("2627d12039b6c5ca52dbb15c8934ff4f", {
        autocapture: true,
        track_pageview: true,
        record_sessions_percent: 100,
        record_heatmap_data: true,
        ignore_dnt: true,
      });
    }
  }, []);

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

        <main role="main" className="projectsGrid">
          {ProjectsList.map((project) => (
            <ProjectTile
              key={project.title}
              project={project}
              setSelectedProject={setSelectedProject}
              setModalOpen={() => setModalOpen(true)}
              authenticated={authenticated}
            />
          ))}
        </main>

        <footer className="footer">
          <p className="body2">
            I designed and built this website from scratch! Check out the code
            on{" "}
            <Link href="https://github.com/atruttmann/atruttmann.github.io">
              GitHub
            </Link>
            .
          </p>
        </footer>
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
