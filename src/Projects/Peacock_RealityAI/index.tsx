import type { ProjectData } from "@types";
import Image from "@/components/Image/Image";
import Video from "@/components/Video/Video";
import Cover from "./Cover.png";
import Image1 from "./1.png";
import Image2 from "./2.png";
import DemoVideo from "./Demo.mp4";

const RealityAI: ProjectData = {
  title: "Reality AI",
  subTitle: "iOS prototype for Bravo fans",
  coverImageSrc: Cover,
  coverPosition: "center",
  passwordRequired: true,
  overview: {
    problem:
      "We want Peacock users to increase their fandom engagement and watch more short-form vertical content in our app.",
    goal: "Develop an iOS prototype with innovative video storytelling features in a TikTok-style feed.",
    outcome:
      "This prototype was tested with 12 users and used in presentations to leadership.",
    role: "I was the lead developer on this project working with one other senior engineer.",
    technologies: "SwiftUI, iOS",
    dates: "June - October 2025",
  },
  content: (
    <>
      <Video src={DemoVideo} mobile caption="Full demo of the prototype" />

      <p>
        One of the biggest challenges of this project was ensuring that videos
        could load and play quickly when navigating horizontally and vertically.
        I implemented efficient video preloading strategies that dynamically
        loaded video content based on the user's position within the grid of
        videos.
      </p>

      <Image src={Image1} mobile caption="AI avatar of Andy Cohen" />

      <Image src={Image2} mobile caption="Video clip with metadata" />
    </>
  ),
};

export default RealityAI;
