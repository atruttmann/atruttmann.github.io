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
        I'm passionate about using my coding skills and eye for design to create
        great user experiences. I'm currently a Senior UX Engineer at Roku
        designing and building internal tools that accelerate designers'
        workflows. I also prototype TV experiences for user testing.
      </p>
      <p>
        I moved from Wisconsin to the Bay Area in 2018 after graduating from
        UW-Madison with a bachelor's in Computer Science and a minor in Digital
        Art. When I'm away from my computer, I love to hike, cook, and
        embroider.
      </p>
      <div className="linkIcons">
        <a
          href="https://www.linkedin.com/in/alaynatruttmann/"
          aria-label="LinkedIn"
        >
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
