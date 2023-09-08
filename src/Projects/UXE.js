import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "UXE";
const imgPrefix = getImgPrefix(imgFolder);

const UXE = {
  title: "Roku UX Engineering",
  subTitle: "Team website & tools",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "center top",
  passwordRequired: false, // TODO
  overview: {
    problem:
      "Roku designers need a way to easily view their prototypes on TVs for user testing.",
    goal: "Create an easy to use web platform that exports prototypes to a Roku TV channel.",
    role: "I am the sole designer and full stack engineer on this project.",
    dates: "September 2022 - present",
    technologies: "React, AWS Dynamo DB, AWS S3, Jira API",
  },
  content: (
    <>
      <p></p>
    </>
  ),
};

export default UXE;
