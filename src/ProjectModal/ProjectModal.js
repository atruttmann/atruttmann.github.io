import { FaTimesCircle } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import PasswordProtector from "./PasswordProtector/PasswordProtector";
import "./ProjectModal.scss";

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
      keyboard={true}
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
            <div className="tldr">
              <h2 className="tldrTitle">TL;DR</h2>
              {project.tldr.map((infoItem) => (
                <p key={infoItem.title}>
                  <b>{`${infoItem.title}: `}</b>
                  {infoItem.content}
                </p>
              ))}
              {project.links.length >= 1 && (
                <p>
                  <b>Links: </b>
                  {project.links.map((link, index) => (
                    <>
                      <a href={link.url} key={link.title}>
                        {link.title}
                      </a>
                      {index < project.links.length - 1 && " | "}
                    </>
                  ))}
                </p>
              )}
            </div>

            <hr className="contentDivider" />

            {project.content}
          </>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
