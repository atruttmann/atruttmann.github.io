const imgFolder = "Toolkit";
const imgPrefix = `${process.env.PUBLIC_URL}images/${imgFolder}/`;

const Toolkit = {
  title: "QB Designer Toolkit",
  subTitle: "Figma plugin for Intuit designers",
  imageFolderName: imgFolder,
  coverImageName: "Cover",
  passwordRequired: true,
  links: [
    {
      title: "QuickBooks Dark Mode Documentation",
      url: "https://designsystem.quickbooks.com/bolt/dark-mode/",
    },
  ],
  overview: [
    {
      title: "Problem",
      content:
        "How can we leverage Figma plugins to improve Intuit designers' workflows?",
    },
    {
      title: "Goal",
      content:
        "Create a Figma plugin that empowers designers to easily add motion, content, and theming to their work.",
    },
    {
      title: "Role",
      content:
        "I designed and developed the dark mode converter, and worked with other Design Technologists to release the full plugin.",
    },
    { title: "Dates", content: "February - April 2021" },
  ],
  content: (
    <>
      <p>
        In the last year, Intuit designers have made the switch to using{" "}
        <a href="https://www.figma.com/">Figma</a> as their primary design tool.
        Figma supports adding{" "}
        <a href="https://www.figma.com/community/plugins?tab=plugins">
          plugins
        </a>
        , which are apps you can install to add functionality and improve your
        workflow. After experimenting with Figma plugins in a hackathon, I was
        eager to develop the first Figma plugin for Intuit designers.
      </p>
      <p>
        A design hurdle I wanted to tackle was supporting theming, particularly
        dark mode. Dark mode has been a work in progress for Intuit design for
        some time and is currently an experimental beta setting for QuickBooks.
        Dark mode is a priority because it is a feature our users expect, and
        also has accessibility benefits such as better contrast and reduced eye
        strain. As this feature becomes more used, we need to make sure that
        designs will work for both light and dark modes.
      </p>
      <img src={`${imgPrefix}1.gif`} alt="Dark mode demo" />
      <p>
        I needed to figure out how to best apply our color pairing rules
        automatically to designs. I started by researching other dark mode Figma
        plugins. I then created a simple UI that would allow users to toggle
        both layers and pages between light and dark mode. I also included a
        color inspector that would display the fill and border colors for a
        selected layer and show their light and dark mode pairings.
      </p>
      <img
        src={`${imgPrefix}2.png`}
        className="withCaption"
        alt="Plugin interface"
      />
      <p className="body2 caption">
        Inspecting a dark mode design to see the color pairings.
      </p>
      <p>
        Once I had a solid design, I moved on to developing the functionality
        using <a href="https://www.typescriptlang.org/">Typescript</a> and{" "}
        <a href="https://sass-lang.com/">Sass</a>. The plugin works by analyzing
        a layer's fill and border colors, finding the appropriate contextual
        color pairing, and then changing the layer's colors to the new theme.
        Color style names are saved so no data is lost in the transformation.
        This automatic process is completed in a matter of seconds, which saves
        designers hours of work in manually changing colors.
      </p>
      <video className="withCaption" controls preload="none">
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>
      <p className="body2 caption">
        This quick demo of Dark Mode that appeared within a QB Designer Toolkit
        instructional video I created.
      </p>
      <p>
        Design Technologists on my team also created two other plugins that
        focus on motion and content. We combined all three plugins to make it
        easy for designers to access all of our tools at once. I led the merge
        effort and refactored our code to use the same visual style and coding
        standards.
      </p>
      <p>
        We released the plugin to our design community in April 2021. Two months
        after it was released, the plugin has been installed by 181 users. I
        added analytics tracking to buttons within the plugin and wrote a node
        script to summarize this data. This will help us make data-driven design
        decisions as we continue to update and improve the plugin. A possible
        next step would be to allow users to create custom color pairings.
      </p>
    </>
  ),
};

export default Toolkit;
