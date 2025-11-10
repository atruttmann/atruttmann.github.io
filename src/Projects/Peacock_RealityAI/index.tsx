import type { ProjectData } from "@types";
import Video from "@/components/Video/Video";
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
      <Video src={DemoVideo} poster={Image1} />
    </>
  ),
};

export default RealityAI;
