import {
  FaLinkedin,
  FaIdCard,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";
import Link from "@components/Link/Link";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <h1>Hi, I'm Alayna</h1>
    <p>
      I'm a Senior Design Engineer with experience in prototyping and creating
      design tools at Peacock, Roku, and Intuit.
    </p>
    <div className="linkIcons">
      <a
        href="https://www.linkedin.com/in/atruttmann/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="Resume-Alayna-Truttmann.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        title="Resume"
      >
        <FaIdCard />
      </a>
      <Link href="mailto:amtruttmann@gmail.com" label="Email">
        <FaEnvelope />
      </Link>
      <Link href="https://github.com/atruttmann" label="GitHub">
        <FaGithubSquare />
      </Link>
    </div>
  </header>
);

export default Header;
