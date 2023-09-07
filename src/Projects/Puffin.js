import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "Puffin";
const imgPrefix = getImgPrefix(imgFolder);

const Puffin = {
  title: "Puffin Bulk Generator",
  subTitle: "Figma plugin for Roku designers",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "center",
  passwordRequired: false, // TODO
  overview: {
    problem:
      "Roku designers need a way to easily view their prototypes on TVs for user testing.",
    goal: "Create an easy to use web platform that exports prototypes to a Roku TV channel.",
    role: "I am the sole designer and full stack engineer on this project.",
    dates: "April 2022 - present",
    technologies: "Figma Plugin API, Typescript, React",
  },
  content: (
    <>
      <p></p>
    </>
  ),
};

export default Puffin;
