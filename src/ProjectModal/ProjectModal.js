import React from "react";
import {
  FaTimesCircle,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import PasswordProtector from "./PasswordProtector/PasswordProtector";
import "./ProjectModal.scss";

const imageSrcPrefix = `${process.env.PUBLIC_URL}images/`;

const ProjectModal = ({
  project,
  open,
  closeModal,
  authenticated,
  authenticate = () => {},
}) => {
  return (
    <Modal
      show={open}
      backdrop={false}
      className="modalContainer"
      dialogClassName="modalDialog"
      contentClassName="modalContent"
    >
      <div className="projectContent">
        <button className="closeButton" onClick={closeModal}>
          <FaTimesCircle className="closeIcon" />
        </button>
        <div className="projectHeader">
          <h1>{project.title}</h1>
          <h3>{project.subTitle}</h3>
        </div>
        {project.passwordRequired && !authenticated ? (
          <PasswordProtector authenticate={authenticate} />
        ) : (
          <>
            <Carousel
              indicators={false}
              interval={null}
              wrap={false}
              prevIcon={<FaChevronCircleLeft className="carouselControl" />}
              nextIcon={<FaChevronCircleRight className="carouselControl" />}
              className="projectCarousel"
            >
              {project.slides.map((slide, index) => (
                <Carousel.Item key={index} interval={null}>
                  <div
                    className="carouselImage"
                    style={{
                      backgroundImage: `url(${imageSrcPrefix}${
                        project.imageFolderName
                      }/${index + 1}.png)`,
                    }}
                    alt={`${project.title} Slide ${index + 1}`}
                  />
                  <Carousel.Caption className="carouselCaption">
                    <p className="body2">{slide}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="projectLinks">
              {project.links.map((link) => (
                <a className="projectButton" href={link.url} key={link.title}>
                  {link.title}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
