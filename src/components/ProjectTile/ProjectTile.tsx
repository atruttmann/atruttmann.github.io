import { FaLock } from "react-icons/fa";
import type { ProjectData } from "@types";
import "./ProjectTile.scss";

interface ProjectTileProps {
  project: ProjectData;
  setSelectedProject: (project: ProjectData) => void;
  setModalOpen: (open: boolean) => void;
}

const ProjectTile = ({
  project,
  setSelectedProject,
  setModalOpen,
}: ProjectTileProps) => {
  const locked = project.passwordRequired;

  return (
    <div
      className="projectTile"
      onClick={(e) => {
        setSelectedProject(project);
        setModalOpen(true);
        e.stopPropagation();
      }}
    >
      <div
        className="projectImage"
        style={{
          backgroundImage: `url(${project.coverImageSrc})`,
          backgroundPosition: project.coverPosition ?? "center",
          filter: locked ? "blur(10px)" : "none",
        }}
      />
      <div className="projectLabel">
        <div>
          <h2>{project.title}</h2>
          <p className="body2">{project.subTitle}</p>
        </div>
        {locked && <FaLock />}
      </div>
    </div>
  );
};

export default ProjectTile;
