import type { ProjectData } from "@types";
import "./ProjectTile.scss";

const ProjectTile = ({
  project,
  setSelectedProject,
  setModalOpen,
}: {
  project: ProjectData;
  setSelectedProject: (project: ProjectData) => void;
  setModalOpen: (open: boolean) => void;
}) => {
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
        }}
      />
      <div className="projectLabel">
        <h2>{project.title}</h2>
        <p className="body2">{project.subTitle}</p>
      </div>
    </div>
  );
};

export default ProjectTile;
