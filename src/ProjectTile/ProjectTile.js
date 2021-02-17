import "./ProjectTile.scss";

const imageSrcPrefix = `${process.env.PUBLIC_URL}images/`;

const ProjectTile = ({
  project,
  setSelectedProject = () => {},
  setModalOpen = () => {},
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
          backgroundImage: `url(${imageSrcPrefix}${project.imageFolderName}/${project.coverImageName}.png)`,
        }}
        alt={`Cover for ${project.title}`}
      />
      <div className="projectLabel">
        <h2>{project.title}</h2>
        <p className="body2">{project.subTitle}</p>
      </div>
    </div>
  );
};

export default ProjectTile;
