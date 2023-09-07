import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "Flow";
const imgPrefix = getImgPrefix(imgFolder);

const Flow = {
  title: "Flow",
  subTitle: "Prototyping tool for web & TV",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "center",
  passwordRequired: true,
  overview: {
    problem:
      "Roku designers need a way to easily view their prototypes on TVs for user testing.",
    goal: "Create an easy to use web platform that exports prototypes to a Roku TV channel.",
    role: "I am the sole designer and full stack engineer on this project.",
    dates: "April 2022 - present",
  },
  content: (
    <>
      <p></p>
    </>
  ),
};

export default Flow;
