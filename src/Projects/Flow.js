import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "Flow";
const imgPrefix = getImgPrefix(imgFolder);

const Flow = {
  title: "Flow",
  subTitle: "Prototyping tool for web & TV",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "center",
  passwordRequired: false, // TODO
  overview: {
    problem:
      "Roku designers need a way to easily view their prototypes on TVs for user testing.",
    goal: "Create an easy to use web platform that exports prototypes to a Roku TV channel.",
    role: "I am the sole designer and full stack engineer on this project.",
    dates: "April 2022 - present",
    technologies: "React, AWS Dynamo DB, AWS S3",
  },
  content: (
    <>
      <p></p>

      <video
        className="withCaption"
        controls
        preload="none"
        poster={`${imgPrefix}1.png`}
      >
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>
      <p className="body2 caption">
        Demo video made to give users an overview of Flow.
      </p>
    </>
  ),
};

export default Flow;
