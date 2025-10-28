import type { ProjectData } from "@types";
import Cover from "./Cover.png";
import Image1 from "./1.png";
import DemoVideo from "./Demo.mp4";

const RealityAI: ProjectData = {
  title: "Reality AI",
  subTitle: "iOS prototype for Bravo fans",
  coverImageSrc: Cover,
  coverPosition: "center",
  passwordRequired: true,
  overview: {
    problem: "",
    goal: "",
    outcome: "",
    role: "",
    technologies: "SwiftUI, iOS",
    dates: "June - October 2025",
  },
  content: (
    <>
      <video
        controls
        preload="none"
        poster={Image1}
        style={{ maxHeight: "75vh", width: "fit-content" }}
      >
        <source src={DemoVideo} type="video/mp4" />
      </video>
    </>
  ),
};

export default RealityAI;
