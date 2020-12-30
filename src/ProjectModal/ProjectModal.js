import {
  FaTimesCircle,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import "./ProjectModal.scss";

const imageSrcPrefix = `${process.env.PUBLIC_URL}images/`;

const ProjectModal = ({ project, open, closeModal }) => {
  return (
    <div className={`projectModal${open ? " open" : ""}`}>
      <FaTimesCircle className="closeIcon" onClick={closeModal} />
      <div className="modalContent">
        <div className="modalHeader">
          <h1>{project.title}</h1>
          <h2>{project.subTitle}</h2>
        </div>
        <Carousel
          indicators={false}
          inveral={null}
          wrap={false}
          prevIcon={<FaChevronCircleLeft className="carouselControl" />}
          nextIcon={<FaChevronCircleRight className="carouselControl" />}
        >
          {project.slides.map((slide, index) => (
            <Carousel.Item key={slide.image}>
              <div
                className="carouselImage"
                style={{
                  backgroundImage: `url(${imageSrcPrefix}${project.imageFolderName}/${slide.image})`,
                }}
                alt={`${project.title} Slide ${index + 1}`}
              />
              <Carousel.Caption className="carouselCaption">
                <p className="body2">{slide.content}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectModal;
