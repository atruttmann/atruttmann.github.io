import type { ProjectData } from "@types";
import Image from "@components/Image/Image";
import Link from "@components/Link/Link";
import Video from "@components/Video/Video";
import Cover from "./Cover.png";
import DemoVideo from "./Demo.mp4";
import ReframingVideo from "./Reframing.mp4";
import Landscape from "./Landscape.png";
import Portrait from "./Portrait.png";
import Vertical from "./Vertical.png";
import Menu from "./Menu.png";
import Info from "./Info.png";
import Season from "./Season.png";
import ReframingImage from "./Reframing.png";

const MobilePlayer: ProjectData = {
  title: "Mobile Player Redesign",
  subTitle: "iOS prototype for Peacock",
  coverImageSrc: Cover,
  coverPosition: "center",
  passwordRequired: true,
  overview: {
    problem:
      "Peacock users need an improved mobile video player experience that caters to different viewing orientations.",
    goal: "Develop an iOS prototype of a redesigned Peacock mobile video player that includes landscape, portrait, and vertical video viewing options.",
    outcome:
      "This prototype was used in 31 user testing sessions to gather feedback on the new design.",
    role: "I was the lead developer on this project working with one junior engineer.",
    technologies: "iOS, SwiftUI, Apple Vision Framework",
    dates: "January - April 2025",
  },
  content: (
    <>
      <p>
        The Peacock Design Team, in collaboration with{" "}
        <Link href="https://www.studiorodrigo.com/">Studio Rodrigo</Link>,
        created a refreshed mobile video player experience that updated the
        existing landscape viewing mode and added new portrait and vertical
        viewing options. As the lead developer on this project, I was brought on
        to create a high-fidelity iOS prototype of the new video player using
        SwiftUI. A fully functional prototype was crucial for this project to
        test features such as video playback, scrubbing, settings menus, and
        device orientation changes.
      </p>

      <Video
        src={DemoVideo}
        caption="Full prototype demo showing landscape, portrait, and vertical video views."
      />

      <p>
        Prototyping while designs were still being finalized allowed designers
        to quickly iterate and refine designs more effectively since they could
        test a realistic experience on device. For example, our team was able to
        catch a usability issue when we realized the icons were too small to tap
        on device.
      </p>

      <p>
        The refreshed landscape design makes it easier for users to find more
        content to watch and allows for greater control of video preferences
        such as video quality and brightness.
      </p>

      <Image src={Landscape} caption="Landscape view" />

      <p>
        The new portrait experience offers users an easier way to hold their
        phone while watching videos on the go. The vertical video view provides
        an immersive viewing experience by utilizing the entire screen. This
        mode is still in exploration stages but we were able to get valuable
        insights by showing it in user testing sessions.
      </p>

      <div className="multiImg">
        <Image src={Portrait} mobile caption="Portrait view" />
        <Image src={Vertical} mobile caption="Vertical video view" />
      </div>

      <p>
        This prototype included many functionalities including: subtitles and
        audio menus, details about the playing video, "More Like This"
        recommendations, a season picker, and brightness controls. It also had
        design variants for different content types such as movies, TV shows,
        and sports events.
      </p>

      <div className="multiImg">
        <Image src={Menu} mobile caption="Subtitles and audio menu" />
        <Image src={Info} mobile caption="Metadata overflow" />
        <Image src={Season} mobile caption="Season picker" />
      </div>

      <p>
        One of the most interesting challenges of this project was figuring out
        how to crop video from landscape to portrait while maintaining focus on
        the subject of the video. To achieve this, I integrated the{" "}
        <Link href="https://developer.apple.com/documentation/vision/generateattentionbasedsaliencyimagerequest">
          Apple Vision Framework
        </Link>{" "}
        into the prototype to analyze the streamed video frames in real time and
        automatically identify areas of interest within the video frame. I used
        these coordinates to pan the video to the relevant area. I experimented
        with the timing and smoothing of the panning motion to create an optimal
        viewing experience.
      </p>

      <div className="multiImg">
        <Video src={ReframingVideo} mobile />
        <Image
          src={ReframingImage}
          caption="How a region of interest determines the crop of the video"
        />
      </div>

      <p>
        The prototype allowed the team to gather valuable feedback from 31 user
        testing sessions, which informed further refinements to the mobile video
        player design. It was also key in communicating the new design vision to
        executive stakeholders and acted as a source of truth for design specs
        to engineers. These updates are expected to release in Q1 of 2026.
      </p>
    </>
  ),
};

export default MobilePlayer;
