import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "Toolkit";
const imgPrefix = getImgPrefix(imgFolder);

const Toolkit = {
  title: "QB Designer Toolkit",
  subTitle: "Figma plugin for Intuit designers",
  coverImageSrc: `${imgPrefix}/Cover.png`,
  coverPosition: "center",
  passwordRequired: false,
  overview: {
    problem:
      "How can we leverage Figma plugins to improve Intuit designers' workflows?",
    goal: "Create a Figma plugin that empowers designers to easily add motion, content, and theming to their work.",
    role: "I was the lead for this tool. I maintained the design and code of this plugin and promoted it to our users.",
    dates: "February 2021 - April 2022",
    technologies: "Figma Plugin API, TypeScript, React",
  },
  content: (
    <>
      <h2 class="sectionTitle">Version 1</h2>
      <p>
        During the fall of 2020, Intuit designers made the switch to using{" "}
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
        I created a simple UI that would allow users to toggle both layers and
        pages between light and dark mode. I also included a color inspector
        that would display the fill and border colors for a selected layer and
        show their light and dark mode pairings.
      </p>
      <img src={`${imgPrefix}2.png`} alt="Plugin interface" />
      <p className="caption">
        Inspecting a dark mode design to see the color pairings.
      </p>
      <p>
        Once I had a solid design, I moved on to developing the functionality
        using <a href="https://www.typescriptlang.org/">TypeScript</a> and{" "}
        <a href="https://sass-lang.com/">Sass</a>. The plugin analyzes a layer's
        fill and border colors, finding the appropriate contextual color
        pairing, and then changing the layer's colors to the new theme.This
        automatic process is completed in a matter of seconds, which saves
        designers hours of work in manually changing colors.
      </p>
      <video controls preload="none">
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>
      <p className="caption">
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
        Version 1 of this plugin was released to the QuickBooks design community
        in April 2021. The plugin now has now been installed by 238 users,
        roughly 2/3 of our total designers.
      </p>

      <hr className="contentDivider" />
      <h2 class="sectionTitle">Version 2</h2>
      <p>
        After the successful launch of the plugin, I paused development for
        several months to collect analytics and user feedback. In December 2021,
        I created a plan to add more functionality to the plugin. I wanted to
        target three key areas:
      </p>
      <h4>Opportunity #1: Refresh the plugin design</h4>
      <p>
        The first version of this plugin had features that were designed by
        separate teams and lacked a common visual language. The design of the
        plugin did not support multiple modes of navigation. It was likely that
        we would need the flexibility to develop more complex UIs in the future.
      </p>
      <h4>Opportunity #2: Contextualize analytics data</h4>
      <p>
        Adding analytics to a Figma plugin can be a bit of a challenge. Since it
        is contained within an iFrame, there is no access to certain information
        most analytics tools need. For the first launch, I developed a simple
        click counting system for the buttons in the plugin. While this did help
        me understand which buttons were being used the most, it lacked the
        contextual data. Which user clicked, and in what file, and at what time?
        I needed this information to make data-driven decisions about the future
        of the plugin.
      </p>
      <h4>Opportunity #3: Add a requested feature</h4>
      <p>
        Currently, the most used feature within the plugin is the content
        generator. My team did user research to get feedback on this feature and
        found that a common ask from designers was a way to generate numbers.
      </p>
      <h4>Tackling opportunities</h4>
      <p>
        I started by redesigning the plugin to create a common visual language.
        I chose to use{" "}
        <a href="https://www.figma.com/community/file/928108847914589057">
          UI2, Figma's Design System
        </a>{" "}
        as the basis for my design. Using Figma's components and styles helps
        the plugin blend into Figma's UI and seem like a more natural extension
        of its capabilities. I also changed the plugin navigation system to
        include a flyout menu. Moving page navigation into the flyout menu gave
        each feature room for its own navigational elements.
      </p>
      <img src={`${imgPrefix}/Redesign.png`} alt="Redesign before and after" />
      <p className="caption">
        Selection of redesigned screens before (left) and after (right)
      </p>
      <img src={`${imgPrefix}/Cover.png`} alt="Cover art" />
      <p className="caption">Redesigned cover art for installation page</p>
      <p>
        My next step was to add analytics. I chose to use{" "}
        <a href="https://mixpanel.com/">Mixpanel</a> because of its powerful
        capabilities and compatibility with Figma plugins. Now, when a user
        clicks a button I know their name, the file they are using, and their
        overall activity. I can track monthly active users, view a list of Figma
        files the plugin is being used in, and see which buttons are clicked the
        most. This will help me know which features of the plugin are most
        valuable and should be invested in. I now know who the top users of the
        plugin are and can ask them for feedback.
      </p>
      <img
        src={`${imgPrefix}/Mixpanel.png`}
        alt="Mixpanel Analytics Dashboard"
      />
      <p className="caption">
        <a href="https://mixpanel.com/public/7veU4Lv7JycMp3Ene9z4hu">
          Mixpanel Analytics dashboard
        </a>{" "}
        with three weeks of data
      </p>
      <p>
        Next, I worked on the random number generation feature. QuickBooks
        designers often create data tables with transactional information such
        as dates, percentages, and currency values so I wanted to include all of
        these options in this feature. This feature has the flexibility to add
        one number or a range of numbers, with options to sort the range. This
        will reduce the work a designer has to do filling out a table from
        minutes to seconds.
      </p>
      <img src={`${imgPrefix}/Number.png`} alt="Random number generator" />
      <p className="caption">
        The UI allows users to customize the format of numbers, currencies, and
        dates
      </p>
      <p>
        Version 2 was released in January 2022, and the plugin continues to be
        widely used amongst Intuit designers.
      </p>
    </>
  ),
};

export default Toolkit;
