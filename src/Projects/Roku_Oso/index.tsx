import type { ProjectData } from "../../types";
import Image1 from "./1.png";
import Image2 from "./2.png";
import Image3 from "./3.png";

const Oso: ProjectData = {
  title: "Remote backlight interface",
  subTitle: "Controlling TV remote hardware",
  coverImageSrc: Image1,
  coverPosition: "center top",
  passwordRequired: false,
  overview: {
    problem:
      "Roku designers needed to control the LED backlight color and behaviors of an experimental TV remote for user testing.",
    goal: "Develop a web interface that allows designers to control TV remote settings during experimentation and user testing.",
    outcome:
      "Moderators used my interface during user testing sessions to control the remote and gathered useful feedback about the design.",
    role: "I was the sole designer and software developer on this project. I partnered with a hardware engineer to send signals between the web interface and the remote.",
    technologies: "React, Web Serial API, Arduino",
    dates: "September - October 2022",
  },
  content: (
    <>
      <img src={Image1} alt="Backlit remotes" />
      <p className="caption">Backlit remote prototypes</p>

      <p>
        The next generation of Roku remotes will be backlit, meaning that when a
        user interacts with the remote it will light up. This will make the
        buttons easier to see, especially in dark conditions. Roku designers
        needed to determine the best LED color for the remote. They also needed
        to find the best activation method for the light. The options were touch
        (holding remote), proximity (hand is near the remote), or accelerometer
        (moving remote). Designers also needed to be able to configure how long
        the light would stay on, and how long the light should fade out.
      </p>
      <p>
        The best way to make decisions about remote backlighting was through
        user testing. The designers requested to customize remote
        configurations, and have shortcuts to show different configurations
        during testing. This is where I came in to design and develop an
        interface the designers could use.
      </p>

      <p>
        A hardware engineer on my team had built several remotes with an{" "}
        <a href="https://www.arduino.cc/">Arduino</a> that could change the
        remote's settings. It was possible to have a website communicate with
        the remote's Arduino using the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API">
          Web Serial API
        </a>
        . The challenge was that I had never used the Web Serial API and I had
        only a few weeks to design and build this project.
      </p>

      <p>
        I got to work right away. I leveraged several of Roku's web design
        system components to build the interface faster. There were several
        custom components I needed to build. I created a color picker that could
        handle both regular RGB colors as well as{" "}
        <a href="https://giggster.com/guide/color-temperature-chart/">
          color temperatures
        </a>
        . Most of the remote button lights would be a shade of warm white.
        Certain buttons that launched channels would use a brand color, such as
        red for Netflix..
      </p>

      <img src={Image2} alt="Web interface" />
      <p className="caption">Settings used to control the remote</p>

      <p>
        In addition to the main control dashboard I gave designers the ability
        to create preset configurations. Presets were important because the user
        testing moderator needed to be able to show users different variations
        during the session. I set it up so they could apply many settings at
        once with the click of a button.
      </p>

      <img src={Image3} alt="Preset creation" />
      <p className="caption">Creating a preset configuration</p>

      <p>
        User testing sessions showed that the reaction to backlit remotes was
        positive. Preference for the light activation method (touch, proximity,
        accelerometer) was mixed.
      </p>

      <p>
        I learned a lot about communicating with Arduinos in this project. If I
        had more time to work on it, I would have iterated on the design and
        asked for more feedback. The interface was quite complicated to use due
        to the number of settings and customization needed, but could have room
        for improvement on simplicity. However, I would call delivering a
        complicated prototype on a tight timeline a win.
      </p>
    </>
  ),
};

export default Oso;
