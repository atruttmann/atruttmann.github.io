import type { ProjectData } from "@types";
import Image from "@/components/Image/Image";
import Video from "@/components/Video/Video";
import Cover from "./Cover.png";
import Image1 from "./1.png";
import Image2 from "./2.png";
import DemoVideo from "./Demo.mp4";
import Preload from "./Preload.png";

const YourBravoverse: ProjectData = {
  title: "Your Bravoverse",
  subTitle: "iOS prototype for Peacock",
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
      <p>
        Vertical video was a key focus for Peacock in 2025, with short-form
        content launching in several areas of the mobile app. This prototype
        explored how Bravo reality TV content could be integrated into the app,
        with an AI avatar of Andy Cohen guiding users through the experience.
      </p>

      <p>
        Users began with a brief onboarding flow where they could share content
        preferences and be introduced to Andy's AI avatar. The experience
        followed a navigation style similar to TikTok and Instagram Reels, using
        a two-dimensional content grid. Users could swipe vertically to explore
        clips within a single storyline, and swipe horizontally to move between
        different storylines. Users could also optionally dive deeper into a
        specific storyline to view additional clips.
      </p>

      <div className="multiImg">
        <Image src={Image1} mobile caption="AI avatar of Andy Cohen" />
        <Image src={Image2} mobile caption="Video clip with metadata" />
      </div>

      <p>
        We iterated on the design and user experience multiple times throughout
        the project, refining the navigation structure, displayed metadata, AI
        avatar appearance, and more. Working closely with designers and turning
        around changes quickly helped them communicate their vision to
        leadership and engineering stakeholders.
      </p>

      <Video src={DemoVideo} mobile caption="Full demo of the prototype" />

      <p>
        One of the biggest challenges was ensuring videos loaded and played
        quickly when navigating both horizontally and vertically. I implemented
        efficient video preloading strategies that dynamically loaded content
        based on the user's position within the grid.
      </p>

      <Image
        src={Preload}
        caption="Video preloading strategy"
        maxWidth="40rem"
      />

      <p>
        We tested the prototype with 12 users. Having a highly interactive and
        realistic experience helped validate that users understood the
        navigation model. We also gathered feedback on the AI avatar and made
        refinements to better align with user preferences.
      </p>
    </>
  ),
};

export default YourBravoverse;
