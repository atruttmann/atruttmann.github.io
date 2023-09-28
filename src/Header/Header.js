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
        I'm a Senior UX Engineer with more than five years of experience in
        web-based prototyping and creating internal design tools at Roku and
        Intuit. I'm currently looking for a new role - reach out to
        amtruttmann@gmail.com if there's a fit!
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
