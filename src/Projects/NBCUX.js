import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "NBCUX";
const imgPrefix = getImgPrefix(imgFolder);

const NBCUX = {
  title: "NBCUX Self-Service",
  subTitle: "Figma plugin for NBC Universal",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "top",
  passwordRequired: false,
  overview: {
    problem:
      "NBC Universal has many internal enterprise tools and not enough designers to support them. Product managers need to create their own layouts in Figma and FigJam with minimal support from the design team.",
    goal: "Make Figma easy to use for non-designers by creating a plugin that generates layouts using design system components.",
    role: "I was the lead engineer on this project and worked with another UX Engineer. This was a short-term contract role.",
    dates: "October - December 2023",
    technologies:
      "Figma Plugin API, TypeScript, React, Material UI, GitHub Actions, Jest",
  },
  content: (
    <>
      <p>Design evolved over time. Used Material UI.</p>
      <img
        src={`${imgPrefix}/Evolution.png`}
        alt="Design iterations"
        className="withCaption"
      />
      <p className="body2 caption">Design iterations over time.</p>

      <p>Describe documentation</p>
      <img
        src={`${imgPrefix}/Documentation.png`}
        alt="Documentation"
        className="withCaption"
      />
      <p className="body2 caption">
        A documentation frame is positioned next to newly created templates.
      </p>

      <img
        src={`${imgPrefix}/Mixpanel.png`}
        alt="Mixpanel Analytics Dashboard"
        className="withCaption"
      />
      <p className="body2 caption">
        <a href="https://mixpanel.com/public/6fPuCsME2BR7Ra7NECbdgx">
          Mixpanel Analytics dashboard
        </a>{" "}
        with preliminary data.
      </p>
    </>
  ),
};

export default NBCUX;
