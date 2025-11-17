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
      I'm a Senior Design Engineer with a passion for prototyping and creating
      design tools. I'm currently at Peacock and previously worked at Roku &
      Intuit.
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
      <Link href="mailto:amtruttmann@gmail.com" label="amtruttmann@gmail.com">
        <FaEnvelope />
      </Link>
      <Link href="https://github.com/atruttmann" label="GitHub">
        <FaGithubSquare />
      </Link>
    </div>
  </header>
);

export default Header;
