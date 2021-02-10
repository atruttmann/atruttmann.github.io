import React, { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectTile.scss";

const imageSrcPrefix = `${process.env.PUBLIC_URL}images/`;

const ProjectTile = ({ project, authenticated, authenticate = () => {} }) => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <>
      <div
        className="projectTile"
        onClick={(e) => {
          setProjectModalOpen(true);
          e.stopPropagation();
        }}
      >
        <div
          className="projectImage"
          style={{
            backgroundImage: `url(${imageSrcPrefix}${project.imageFolderName}/${project.coverImageName}.png)`,
          }}
          alt={`Cover for ${project.title}`}
        />
        <div className="projectLabel">
          <h2>{project.title}</h2>
          <p className="body2">{project.subTitle}</p>
        </div>
      </div>
      <ProjectModal
        project={project}
        open={projectModalOpen}
        closeModal={() => setProjectModalOpen(false)}
        authenticated={authenticated}
        authenticate={authenticate}
      />
    </>
  );
};

export default ProjectTile;
