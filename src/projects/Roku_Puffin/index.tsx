import type { ProjectData } from "@types";
import Image from "@/components/Image/Image";
import Video from "@/components/Video/Video";
import Image1 from "./1.png";
import Image2 from "./2.png";
import Image3 from "./3.png";
import Image4 from "./4.png";
import DemoVideo from "./Demo.mp4";

const Puffin: ProjectData = {
  title: "Puffin Bulk Generator",
  subTitle: "Figma plugin for Roku designers",
  coverImageSrc: Image1,
  coverPosition: "center",
  passwordRequired: false,
  overview: {
    problem:
      "Bulk generating assets is an arduous task for designers, and handoff to engineering is a manual, non-standardized process.",
    goal: "Take the tedious work out of bulk generating assets. Automate work that is currently done with copy/paste, while letting designers have control over tweaking the details. Make it easy to hand off assets to engineers.",
    outcome: "I released the first version of the plugin in August 2023.",
    role: "I was the sole designer and developer on this project.",
    technologies: "Figma Plugin API, TypeScript, React",
    dates: "April - August 2023",
  },
  content: (
    <>
      <p>
        A common problem in the Roku design community is that generating tile
        images is a long process involving a lot of copying and pasting. Tile
        assets can be a list of TV or movie categories, sports games, local
        news, and more. Designers need to verify text translations for each
        tile, which can involve generating 100+ tiles at a time. Tile images
        must be compressed and follow a naming convention before handing off to
        engineers.
      </p>

      <Image src={Image2} caption="Example of tiles Roku designers generate" />

      <p>
        My first thought when hearing about these issues was that a Figma plugin
        could be a perfect fit to automate many of these tasks. The advantage to
        using Figma is that designers can keep their work in one tool, and have
        the functionality they need to customize assets.
      </p>

      <p>
        When starting my design process I chose to use{" "}
        <a
          href="https://www.figma.com/community/file/928108847914589057"
          target="_blank"
          rel="noopener noreferrer"
        >
          UI2, Figma's Design System
        </a>
        . I learned from previous experience building plugins that they felt
        more integrated with Figma when they used the same design system. I
        chose to swap Figma's traditional blue accent with an electric purple to
        give it a Roku-themed flair.
      </p>

      <p>
        The first challenge was understanding the process designers go through
        to customize each tile. I wanted to make bulk generation a "one-click"
        experience but found it didn't work with the designer's workflows. Each
        tile has to be customized - the color changed or an icon repositioned.
        It didn't make sense to generate 100 tiles all at once if the designer
        would have to go back and tweak each tile. I shifted my mindset to
        thinking of it as "applying a transformation" to tiles in a multi-step
        process.
      </p>

      <Image src={Image3} caption="Planning the tile generation flow" />

      <p>
        The next step was to design the export experience. My design
        stakeholders requested that I limit the export customizations to
        simplify the process. With that direction, I added settings for image
        resolutions, formats, and folder naming. Puffin takes care of
        standardizing the naming of each layer behind the scenes.
      </p>

      <p>
        Another request from the stakeholders was to add a shortcut for creating
        Figma components. This feature makes it easy to generate a blank
        component with aspect ratio variants since Roku tiles all use the same
        set of aspect ratios.
      </p>

      <Image src={Image4} caption="Finalized designs" />

      <p>
        My previous experience building Figma plugins accelerated the
        development process. I used a handy{" "}
        <a
          href="https://github.com/nirsky/figma-plugin-react-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Figma plugin template
        </a>{" "}
        to start the project. I leveraged{" "}
        <a
          href="https://github.com/alexandrtovmach/react-figma-plugin-ds"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-figma-plugin-ds
        </a>{" "}
        for design system components.{" "}
        <a
          href="https://github.com/Donaldcwl/browser-image-compression"
          target="_blank"
          rel="noopener noreferrer"
        >
          browser-image-compression
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/Stuk/jszip"
          target="_blank"
          rel="noopener noreferrer"
        >
          jszip
        </a>{" "}
        helped me export assets.
      </p>

      <p>
        Finally, I was ready to share the plugin with the Roku design community.
        I created a quick overview video to show what the plugin could do.
      </p>

      <Video src={DemoVideo} poster={Image1} />

      <p>
        Puffin 1.0 launched in August 2023. The next step is to gather user
        feedback to determine changes to make in the next version. I would like
        to explore stronger image compression techniques such as{" "}
        <a
          href="https://en.wikipedia.org/wiki/Quantization_(image_processing)"
          target="_blank"
          rel="noopener noreferrer"
        >
          image quantization
        </a>
        .
      </p>
    </>
  ),
};

export default Puffin;
