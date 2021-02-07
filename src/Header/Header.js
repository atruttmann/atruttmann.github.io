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
      <p className="body1">
        I'm currently a Design Technologist at Intuit creating prototypes for{" "}
        <a href="https://quickbooks.intuit.com/">QuickBooks</a> with React.
        Previously, I worked at at Microsoft and{" "}
        <a href="https://datachat.ai/">DataChat</a> as a front-end development
        intern.
      </p>
      <p className="body1">
        I moved from Wisconsin to the Bay Area in 2018 after graduating from
        UW-Madison with a bachelor's in Computer Science and a minor in Digital
        Art. When I'm away from my computer, I love to hike, cook, and
        embroider.
      </p>
      <div className="linkIcons">
        <a href="https://www.linkedin.com/in/alaynatruttmann/">
          <FaLinkedin />
        </a>
        <a href="download/Resume-AlaynaTruttmann.pdf">
          <FaIdCard />
        </a>
        <a href="mailto:amtruttmann@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/atruttmann">
          <FaGithubSquare />
        </a>
      </div>
    </header>
  );
}

export default Header;
