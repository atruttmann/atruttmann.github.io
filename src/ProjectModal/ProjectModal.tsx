import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FaTimesCircle } from "react-icons/fa";
import type { ProjectData } from "@types";
import PasswordProtector from "../PasswordProtector/PasswordProtector";
import "./ProjectModal.scss";

const ProjectModal = ({
  project,
  open,
  closeModal,
  authenticated,
  authenticate,
}: {
  project: ProjectData;
  open: boolean;
  closeModal: () => void;
  authenticated: boolean;
  authenticate: (input: string) => boolean;
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (authenticated) loadVideos();
  }, [authenticated]);

  /* 
  Videos are set to not preload so the loading doesn't affect the CSS transitions
  as the modal animates in. After the modal is done animating, load the videos so
  they are ready to play. Use a CSS transition with opacity so it the unloaded video 
  doesn't show, only the loaded video.
  */
  const loadVideos = () => {
    const videos = document.getElementsByTagName("video");
    Array.from(videos).forEach((video) => {
      video.preload = "auto";
      video.style.opacity = "1";
    });
  };

  const modalAnimationFinish = () => {
    loadVideos();

    // Focus password input
    const passwordInput = document.getElementById("passwordInput");
    if (passwordInput) passwordInput.focus();
  };

  return (
    <CSSTransition
      in={open}
      timeout={400}
      unmountOnExit
      onEntered={modalAnimationFinish}
      nodeRef={nodeRef}
    >
      <div className="modalContainer">
        <div className="projectContent">
          <button
            className="closeButton"
            onClick={closeModal}
            aria-label="Close modal"
          >
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
              <div className="overview">
                <h2 className="sectionTitle">Overview</h2>
                {(
                  Object.keys(
                    project.overview,
                  ) as (keyof typeof project.overview)[]
                ).map((infoItem) => (
                  <p key={infoItem}>
                    <b>{`${infoItem}: `}</b>
                    {project.overview[infoItem]}
                  </p>
                ))}
                {project.links && project.links.length >= 1 && (
                  <p>
                    <b>Links: </b>
                    {project.links?.map((link, index) => (
                      <span key={link.title}>
                        <a href={link.url}>{link.title}</a>
                        {index < (project.links?.length ?? 0) - 1 && " | "}
                      </span>
                    ))}
                  </p>
                )}
              </div>

              <hr className="contentDivider" />

              {project.content}
            </>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ProjectModal;
