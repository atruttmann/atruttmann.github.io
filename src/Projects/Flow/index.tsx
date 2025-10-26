import type { ProjectData } from "@types";
import Image1 from "./1.png";
import Image2 from "./2.png";
import Image3 from "./3.png";
import Image4 from "./4.png";
import Image5 from "./5.png";
import Image6 from "./6.png";
import DemoVideo from "./Demo.mp4";

const Flow: ProjectData = {
  title: "Flow",
  subTitle: "Prototyping tool for web & TV",
  coverImageSrc: Image1,
  coverPosition: "center",
  passwordRequired: false,
  overview: {
    problem:
      "Roku designers need a way to easily view their prototypes on TVs for user testing.",
    goal: "Create an easy to use web platform that exports prototypes to a Roku TV channel.",
    outcome:
      "The fist version of Flow was released in August 2022. I continued to maintain the tool and release feature updates.",
    role: "I was the sole designer and full stack engineer on this project.",
    technologies: "React, Node.js, Express, AWS Dynamo DB, AWS S3",
    dates: "April 2022 - September 2023",
  },
  content: (
    <>
      <p>
        Prototyping is at the heart of the Roku UX Engineering team's focus, but
        we don't always have time to make every prototype designers request.
        Creating an internal prototyping tool allows designers to self-serve
        simple prototypes, freeing up UX Engineers to code complex experiences.
        Flow empowers designers to create and view their prototypes on a TV and
        share them with in-person or remote users for testing.
      </p>

      <p>
        The first step I took to make Flow was to plan out the user experience.
        The experience is split between creating a prototype on the web and
        viewing a prototype on a Roku channel.
      </p>

      <img src={Image2} alt="User experience diagram" />

      <div>
        <p>
          I started designing the experience using Roku's web design system
          components. I iterated on the design using feedback gathered from my
          team. The primary web views are:
        </p>
        <ol>
          <li>Login</li>
          <li>View all prototypes</li>
          <li>Edit prototype</li>
          <li>Preview prototype</li>
        </ol>
      </div>

      <img src={Image3} alt="Flow home page" />
      <p className="caption">
        View all of your prototypes on the Flow home page
      </p>

      <p>
        I started developing the website first. I used React to build the UI and
        a Node.js to send data to Dynamo DB and store images in a S3 bucket. I
        leveraged the open source{" "}
        <a
          href="https://reactflow.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Flow
        </a>{" "}
        library as the editor for my interactive diagrams.
      </p>
      <img src={Image4} alt="Flow editor" />
      <p className="caption">Editing a prototype</p>

      <p>
        I built a web preview so users can try out the prototype on the web and
        fix issues before viewing on the TV.
      </p>
      <img src={Image5} alt="Prototype preview" />
      <p className="caption">Previewing a prototype</p>

      <p>
        The next phase of my development work was creating the Roku channel. I
        used an internal technology that functions like to React but works on TV
        channels. It is similar to the externally available{" "}
        <a
          href="https://developer.roku.com/develop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Roku SDK
        </a>
        .
      </p>
      <img src={Image6} alt="Roku channel home view" />
      <p className="caption">
        Entering a prototype code on the installed channel
      </p>

      <p>
        Flow 1.0 was released in August 2022. I created a demo video to
        introduce users to Flow.
      </p>

      <video controls preload="none" poster={Image1}>
        <source src={DemoVideo} type="video/mp4" />
      </video>

      <p>
        As more designers have used the tool I added new features based on their
        use cases. These features include fade transitions, long-pressing remote
        buttons, allowing videos, screen reader support, and more. Eventually, I
        wanted to make a Figma plugin that can export images into Flow to
        accelerate the design process.
      </p>
    </>
  ),
};

export default Flow;
