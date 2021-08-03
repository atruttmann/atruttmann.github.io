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
        I'm currently a Senior Design Technologist at Intuit creating prototypes for{" "}
        <a href="https://quickbooks.intuit.com/">QuickBooks</a> with React. I
        work closely with designers to polish interaction and animation details
        to deliver pixel-perfect prototypes. I also create internal tools for
        Intuit designers that accelerate the design and prototyping process.
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
