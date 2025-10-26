import {
  FaLinkedin,
  FaIdCard,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <h1>Hi, I'm Alayna</h1>
    <p>
      I'm a Senior Design Engineer with several years of experience in
      prototyping and creating design tools at Peacock, Roku, and Intuit.
    </p>
    <div className="linkIcons">
      <a
        href="https://www.linkedin.com/in/atruttmann/"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a href="Resume-Alayna-Truttmann.pdf" aria-label="Resume" title="Resume">
        <FaIdCard />
      </a>
      <a href="mailto:amtruttmann@gmail.com" aria-label="Email" title="Email">
        <FaEnvelope />
      </a>
      <a
        href="https://github.com/atruttmann"
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithubSquare />
      </a>
    </div>
  </header>
);

export default Header;
