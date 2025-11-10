import type { ProjectData } from "@types";
import Link from "@components/Link/Link";
import Video from "@components/Video/Video";
import Cover from "./Cover.png";
import DemoVideo from "./Demo.mp4";
import Landscape from "./Landscape.png";

const MobilePlayer: ProjectData = {
  title: "Mobile Player Redesign",
  subTitle: "iOS prototype for Peacock video player",
  coverImageSrc: Cover,
  coverPosition: "center",
  passwordRequired: true,
  overview: {
    problem:
      "Peacock users need an improved mobile video player experience that caters to different viewing orientations.",
    goal: "Develop an iOS prototype of a redesigned Peacock mobile video player that includes landscape, portrait, and portrait fullscreen viewing options.",
    outcome:
      "This prototype was used in 31 user testing sessions to gather feedback on the new design.",
    role: "I was the lead developer on this project working with one junior engineer.",
    technologies: "SwiftUI, iOS, Apple Vision Framework",
    dates: "January - April 2025",
  },
  content: (
    <>
      <p>
        The Peacock Design Team, in collaboration with{" "}
        <Link href="https://www.studiorodrigo.com/">Studio Rodrigo</Link>,
        created a refreshed mobile video player experience that updated the
        existing landscape viewing mode and added new portrait and portrait
        fullscreen viewing options. As the lead developer on this project, I was
        brought on to create a high-fidelity iOS prototype of the new video
        player using SwiftUI. A fully functional prototype was crucial for this
        project to test features such as video playback, scrubbing, settings
        menus, and device orientation changes.
      </p>

      <Video
        src={DemoVideo}
        caption="Full prototype demo showing landscape, portrait, and portrait fullscreen."
      />

      <p>
        The prototype allowed the team to gather valuable feedback from 31 user
        testing sessions, which informed further refinements to the mobile video
        player design.
      </p>
    </>
  ),
};

export default MobilePlayer;
