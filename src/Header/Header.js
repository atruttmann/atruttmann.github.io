import {
  FaLinkedin,
  FaIdCard,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <h1>Hi, I'm Alayna.</h1>
      <p>
        I'm passionate about the intersection of design and code! I'm currently
        a Design Technologist at Intuit, and I formerly worked in front-end
        development at Microsoft and DataChat. I'm also an alumna of UW-Madison
        with a BA in Computer Science and minor in Digital Art.
      </p>
      <div className="linkIcons">
        <a
          href="https://www.linkedin.com/in/alaynatruttmann/"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="downloads/Resume-AlaynaTruttmann.pdf"
          title="Resume"
          target="_blank"
          rel="noreferrer"
        >
          <FaIdCard />
        </a>
        <a
          href="mailto:amtruttmann@gmail.com"
          title="Email"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/atruttmann"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
}

export default Header;
