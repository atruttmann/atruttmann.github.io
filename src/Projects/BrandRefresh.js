import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "BrandRefresh";
const imgPrefix = getImgPrefix(imgFolder);

const BrandRefresh = {
  title: "Roku OS Brand Refresh",
  subTitle: "Prototype of design updates",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "center top",
  passwordRequired: true,
  overview: {
    problem:
      "The Roku Visual Design team needed to showcase their vision of a brand refresh initiative to executives.",
    goal: "Prototype design updates across the entire Roku OS.",
    role: "I ran the sprints for this project and presented the prototype to Roku's Design VP. I developed the prototype with another UX Engineer.",
    dates: "July - August 2023",
    technologies: "Vue",
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

      <img
        className="withCaption"
        src={`${imgPrefix}1.png`}
        alt="Roku home screen"
      />
      <p className="body2 caption">
        Roku home screen with brand refresh updates
      </p>

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

      <img
        className="withCaption"
        src={`${imgPrefix}2.png`}
        alt="Prototype configuration"
      />
      <p className="body2 caption">Prototype configuration screen</p>

      <p>
        Many screens within the prototype needed to be fully functional. Some of
        the screens I created included "What to Watch" (content suggestions), a
        sports page, and The Roku Channel (Roku's streaming service).
      </p>

      <img
        className="withCaption"
        src={`${imgPrefix}3.png`}
        alt="What to Watch page"
      />
      <p className="body2 caption">"What to Watch" content suggestions</p>

      <img
        className="withCaption"
        src={`${imgPrefix}4.png`}
        alt="Sports page"
      />
      <p className="body2 caption">NFL Sports page</p>

      <img
        className="withCaption"
        src={`${imgPrefix}5.png`}
        alt="The Roku Channel"
      />
      <p className="body2 caption">
        The Roku Channel (Roku's streaming service)
      </p>

      <p>
        This project concluded with a presentation to Roku's VP of Design. I
        demoed the prototype so the executives could get a realistic experience
        of what the changes would be like in product.
      </p>
    </>
  ),
};

export default BrandRefresh;
