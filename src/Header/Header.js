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
      <p className="body1">
        I'm passionate about the intersection of design and code! I'm currently
        a Design Technologist at{" "}
        <a
          href="https://quickbooks.intuit.com/"
          target="_blank"
          rel="noreferrer"
        >
          Intuit
        </a>{" "}
        creating prototypes with React. Previously, I worked at at Microsoft and{" "}
        <a href="https://datachat.ai/" target="_blank" rel="noreferrer">
          DataChat
        </a>{" "}
        as a front-end development intern .
      </p>
      <p className="body1">
        I moved from Wisconsin to the Bay Area in 2018 after graduating from
        UW-Madison with a bachelor's in Computer Science and a minor in Digital
        Art. When I'm away from my computer, I love to hike, cook, and
        embroider.
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
