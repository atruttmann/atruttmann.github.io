import {
  FaLinkedin,
  FaIdCard,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1>Hi, I'm Alayna.</h1>
      <p>
        I'm a Senior UX Engineer at Roku creating internal design tools and
        prototyping TV experiences. I'm passionate about using my engineering
        skills and eye for design to create great user experiences.
      </p>
      <div className="linkIcons">
        <a href="https://www.linkedin.com/in/atruttmann/" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="download/Resume-Alayna-Truttmann.pdf" aria-label="Resume">
          <FaIdCard />
        </a>
        <a href="mailto:amtruttmann@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/atruttmann" aria-label="GitHub">
          <FaGithubSquare />
        </a>
      </div>
    </header>
  );
}

export default Header;
