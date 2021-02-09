const imgFolder = "IEPShell";
const imgPrefix = `${process.env.PUBLIC_URL}images/${imgFolder}/`;

const IEPShell = {
  title: "Intuit Expert Portal",
  subTitle: "Proof of concept for design updates",
  imageFolderName: imgFolder,
  passwordRequired: true,
  links: [],
  overview: [
    {
      title: "Problem",
      content:
        "The portal Intuit customer service agents use needed updates to better align with the Intuit Design System and make usability improvements.",
    },
    {
      title: "Goal",
      content:
        "Create a React prototype with these design updates to be passed off to production engineers.",
    },
    {
      title: "Role",
      content:
        "I was the sole developer for this project and partnered with a product design team to create this protoype.",
    },
    { title: "Dates", content: "November - December 2020" },
  ],
  content: (
    <>
      <p>
        For this project, I worked with the Intuit Export Portal design team.
        This portal is used by Intuit customer service agents (a.k.a. Intuit
        Experts) to assist customers. In this portal Experts can see customer
        data while on a call and also manage personal work information such as
        their schedule and notes.
      </p>
      <p>
        The focus for this prototype was updating the "shell" of the product -
        the left, top, and right navigation elements. The design team wanted to
        refresh the components and visual design to align with Intuit Design
        Systems. They also rearranged some of the navigation content based on
        feedback from their users. The inner content was not finalized for this
        phase of prototyping so a responsive column layout was used as a
        placeholder.
      </p>
      <img src={`${imgPrefix}1.png`} alt="The Intuit Export Portal Shell" />

      <p>
        The functionality required for this prototype was to be able to click
        through the left navigation items and open and close the right drawer.
        The "Engagements" screen needed to show a header and tabs with client
        information. Navigation elements also had to behave responsively on
        smaller screens.
      </p>
      <video className="withCaption" controls muted preload="none">
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>
      <p className="body2 caption">
        <i>This video shows the entire flow of the prototype.</i>
      </p>

      <p>
        The most challenging development aspect of this project was the
        responsive design of the top navigation. This header included dropdowns,
        links, and other information that needed to be accessible on smaller
        screens. These navigation items needed to collapse into an overflow
        menu.
      </p>
      <img
        className="withCaption"
        src={`${imgPrefix}2.png`}
        alt="Milestone dropdown when header is not in overflow."
      />
      <p className="body2 caption">
        <i>
          Opening the milestone dropdown when the header is not in an overflow
          state.
        </i>
      </p>

      <img
        className="withCaption"
        src={`${imgPrefix}3.png`}
        alt="Milestone dropdown when header is overflowing."
      />
      <p className="body2 caption">
        <i>Accessing the milestone dropdown in an overflow state.</i>
      </p>

      <p>
        Another responsive aspect of this screen was the overflow behavior for
        tabs. Tabs needed an arrow to show that there were more tabs hidden.
        When clicked, this arrow needed to scroll the tabs by a set pixel value.
      </p>
      <img src={`${imgPrefix}4.png`} alt="Tabs in an overflow state" />

      <p>
        After this prototype had been finalized with the design team, I handed
        off the prototype and the code to the development team. They were able
        to reuse my work in their production code, which sped up the process to
        implement these changes.
      </p>
    </>
  ),
};

export default IEPShell;
