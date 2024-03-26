import {
  FaLinkedin,
  FaIdCard,
  FaGithubSquare,
  FaEnvelope,
} from 'react-icons/fa';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <h1>Hi, I'm Alayna</h1>
      <p>
        I'm a Senior Design Engineer with several years of experience in
        web-based prototyping and creating design tools at NBC, Roku, and
        Intuit.
      </p>
      <div className="linkIcons">
        <a
          href="https://www.linkedin.com/in/atruttmann/"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="download/Resume-Alayna-Truttmann.pdf"
          aria-label="Resume"
          title="Resume"
        >
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
}

export default Header;
