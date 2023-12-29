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
      <p>
        NBC Universal uses more than 100 internal enterprise tools. Their design
        team has fewer than 10 designers to support these tools, leaving a
        design gap. Product managers try to fill this gap but find Figma hard to
        use for design work. Additionally, they are often limited to using only
        FigJam due to licensing costs. My team developed a Figma plugin to allow
        non-designers to self-serve simple layouts.
      </p>

      <p>
        We focused on generating a commonly used page template with a data table
        as the MVP for this tool. Users fill out a form to generate the table
        that specifies the components they want to use in the layout. They can
        customize how many columns the table has, and what the data type of each
        column should be. They can also add components such as tabs, a search
        bar, breadcrumb navigation, and more.
      </p>

      <img src={`${imgPrefix}/2.png`} alt="Creating a table" />
      <p className="caption">Creating a table</p>

      <p>
        When a template is created, the plugin adds documentation next to it. It
        provides a short explanation of how to use the plugin and how to get
        help. The documentation itself is a published Figma component the plugin
        imports. This way, designers can update the documentation without
        developer support.
      </p>

      <img src={`${imgPrefix}/3.png`} alt="Documentation" />

      <p>
        Users can update template layouts as needed. The update process uses the
        current selection to populate the form and data in the UI.
      </p>

      <img src={`${imgPrefix}/4.png`} alt="Updating a table" />
      <p className="caption">Updating a table</p>

      <video controls preload="none" poster={`${imgPrefix}1.png`}>
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>

      <p>
        As the plugin gains more users, it's helpful to have analytics to tell
        us more about how they use the tool. We want to know who the users are,
        if they're using Figma or FigJam, what they are creating and how often.
        It's also important to know if they run into errors. I chose{" "}
        <a href="https://mixpanel.com/">Mixpanel</a> to handle our analytics
        because it's easy to use and integrates well with Figma plugins.
      </p>

      <img
        src={`${imgPrefix}/Mixpanel.png`}
        alt="Mixpanel Analytics Dashboard"
      />
      <p className="caption">
        <a href="https://mixpanel.com/public/6fPuCsME2BR7Ra7NECbdgx">
          Mixpanel Analytics dashboard
        </a>{" "}
        with preliminary data.
      </p>
    </>
  ),
};

export default NBCUX;
