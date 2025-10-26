import type { ProjectData } from "@types";
import Image1 from "./1.png";
import Image2 from "./2.png";
import Image3 from "./3.png";
import Image4 from "./4.png";
import Image5 from "./5.png";

const BrandRefresh: ProjectData = {
  title: "Roku OS Brand Refresh",
  subTitle: "Prototype of design updates",
  coverImageSrc: Image1,
  coverPosition: "center top",
  passwordRequired: true,
  overview: {
    problem:
      "The Roku Visual Design team needed to showcase their vision of a brand refresh initiative to executives.",
    goal: "Prototype design updates across the entire Roku OS.",
    outcome: "I presented the prototype to Roku's VP of Design.",
    role: "I was the lead engineer on this project and worked with another UX Engineer.",
    technologies: "Vue.js",
    dates: "July - August 2023",
  },
  content: (
    <>
      <p>
        In fall 2023, Roku plans to release a brand refresh for the Roku
        platform. The goals of this refresh are to have better visual appeal and
        help users understand the Roku brand. A teammate and I worked with
        visual designers to create a prototype that showcases design changes on
        every screen of the platform.
      </p>

      <img src={Image1} alt="Roku home screen" />
      <p className="caption">Roku home screen with brand refresh updates</p>

      <p>
        This was a complicated undertaking given the breadth of changes and a
        quick timeline. We ran two-week sprints for this project and prioritized
        the features that needed to be fully functional. I took charge of
        creating, prioritizing, and assigning Jira tickets for each feature.
      </p>

      <p>
        Theming was an important aspect of the brand refresh and included black,
        purple, and red variations. We used CSS variables to dynamically change
        color styles. The prototype included a configuration page that allowed
        designers to change the theme.
      </p>

      <img src={Image2} alt="Prototype configuration" />
      <p className="caption">Prototype configuration screen</p>

      <p>
        Many screens within the prototype needed to be fully functional. Some of
        the screens I created included "What to Watch" (content suggestions), a
        sports page, and The Roku Channel (Roku's streaming service).
      </p>

      <img src={Image3} alt="What to Watch page" />
      <p className="caption">"What to Watch" content suggestions</p>

      <img src={Image4} alt="Sports page" />
      <p className="caption">NFL Sports page</p>

      <img src={Image5} alt="The Roku Channel" />
      <p className="caption">The Roku Channel (Roku's streaming service)</p>

      <p>
        This project concluded with a presentation to Roku's VP of Design. I
        demoed the prototype so the executives could get a realistic experience
        of what the changes would be like in product.
      </p>
    </>
  ),
};

export default BrandRefresh;
