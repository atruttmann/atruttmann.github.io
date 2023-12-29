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
      "NBC Universal has many internal enterprise tools and not enough designers to support them. Product managers need to create their own layouts in Figma with minimal support from the design team.",
    goal: "Make Figma easy to use for non-designers by creating a plugin that generates layouts using design system components.",
    role: "I was the lead engineer on this project and worked with another UX Engineer and two designers. This was a short-term contract role.",
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
        as the MVP for this tool. Users can fill out a form to generate a table
        page and specify the components they want to use in the layout. They can
        customize how many columns the table has and what the data type of each
        column should be. They can also add components such as tabs, a search
        bar, breadcrumb navigation, and more.
      </p>

      <img src={`${imgPrefix}/2.png`} alt="Creating a table" />
      <p className="caption">Creating a table</p>

      <p>
        When a template is created, the plugin adds documentation next to it. It
        provides a short explanation of how to use the plugin and where to get
        help. The documentation itself is a published Figma component the plugin
        imports. This way, designers can update the documentation without
        developer support.
      </p>

      <img src={`${imgPrefix}/3.png`} alt="Documentation" />

      <p>
        Users can update template layouts as needed. The update process uses the
        current selection to populate the form data in the UI.
      </p>

      <img src={`${imgPrefix}/4.png`} alt="Updating a table" />
      <p className="caption">Updating a table</p>

      <p>
        I created a short demo video of the plugin to share our MVP with new
        users.
      </p>

      <video controls preload="none" poster={`${imgPrefix}1.png`}>
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>

      <p>
        As the plugin gains more users, it's helpful to have analytics to tell
        us how they use the tool. We want to know who the users are, if they're
        using Figma or FigJam, what they are creating and how often. It's also
        important to know if they run into errors. I chose{" "}
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

      <p>
        This plugin was built with React, TypeScript, and Material UI
        components. I wanted to make the code as easy as possible for any future
        developers. Due to my short-term contract, I wouldn't be there to
        onboard them in the future. I focused on creating great documentation,
        commenting code, and writing unit tests. I chose{" "}
        <a href="https://www.notion.so/">Notion</a> to host documentation on the
        code base and our publication process. I wrote thorough{" "}
        <a href="https://jsdoc.app/">JSDoc</a> comments for all the functions in
        our codebase. I used <a href="https://jestjs.io/">Jest</a> to write unit
        tests that automatically ran on pull requests.
      </p>

      <p>
        A pain point of creating Figma plugins is that the publishing process is
        manual and you have to upload code in the Figma editor. I used{" "}
        <a href="https://github.com/parrot-global/figcd">figcd</a>, a command
        line Figma plugin publishing tool, with GitHub Actions to automatically
        deploy plugin releases. Using figcd took a multi-step process to one
        click of a button.
      </p>

      <p>
        A pain point of creating Figma plugins is that the publishing process is
        manual and you have to upload code in the Figma editor. To work around
        this I used <a href="https://github.com/parrot-global/figcd">figcd</a>,
        a command-line Figma plugin publishing tool. I combined it with GitHub
        Actions to deploy releases, which took a multi-step process to one click
        of a button.
      </p>

      <p>
        The NBCUX Self-Service Figma plugin launched in January 2024.
        Development work is now paused while more support and funding is
        gathered for the plugin. In the future, the plugin will include more
        libraries (Angular, React, and Salesforce), templates, and components.
      </p>
    </>
  ),
};

export default NBCUX;
