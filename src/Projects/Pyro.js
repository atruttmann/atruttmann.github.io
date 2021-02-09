const imgFolder = "Pyro";
const imgPrefix = `${process.env.PUBLIC_URL}images/${imgFolder}/`;

const Pyro = {
  title: "Pyro",
  subTitle: "Prototyping tool for Intuit designers",
  imageFolderName: imgFolder,
  passwordRequired: true,
  links: [],
  overview: [
    {
      title: "Problem",
      content:
        "Intuit designers need a way to quickly create high-fidelity prototypes with interactive components and real user data.",
    },
    {
      title: "Goal",
      content:
        "Develop an intuitive drag-and-drop interface that leverages Intuit Design System components and supports custom data and logic.",
    },
    {
      title: "Role",
      content:
        "I worked on a small team of five Design Technologists. I wore many hats including developing the product, designing new features, leading user testing sessions, and prioritizing our Jira board.",
    },
    { title: "Dates", content: "February 2020 - Present" },
  ],
  content: (
    <>
      <p>
        Pyro is a custom prototyping tool built by Intuit Design Technologists
        for Intuit designers. It allows anyone to create prototypes using Intuit
        Design System components, user data, and logic without writing any code.
        I have been working on this project since February 2020 improving the
        editor and creating features that cater to QuickBooks design needs.
      </p>

      <video className="withCaption" controls preload="none">
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>
      <p className="body2 caption">
        <i>
          This is the demo video for the initial release of Pyro. Video editing
          credits go to my awesome colleagues Heather & Lynda.
        </i>
      </p>

      <p>
        Pyro leverages <a href="https://craft.js.org/">Craft.js</a> with React
        to create drag and drop functionality in the editor. The prototype data
        syncs to a <a href="https://firebase.google.com/">Firebase</a> backend.
        Users can grab components from the left-side panel and drag them into
        the editor. When a component is selected, you can edit its properties in
        the right-side panel. These components are either custom components
        built for Pyro or they are imported from Intuit's design system.
      </p>
      <img src={`${imgPrefix}2.png`} alt="Pyro editor" />
      <p>
        In addition to changing the style of components, you can also set an "on
        click" action for the component or conditionally show or hide it. This
        allows users to build complex prototypes with many pages and branching
        flows. This feature is particularly important for TurboTax designers who
        often need to create flows with a series of questions.
      </p>
      <img src={`${imgPrefix}3.png`} alt="Close up of component editing" />
      <p>
        Many QuickBooks designers need to incorporate real user data into
        customer testing sessions to help the customer feel like the prototype
        is real. Customer data often comes in the form of a list of
        transactions, and typically a Design Technologist would build a custom
        React prototype to display this data. We added an editable table
        component to Pyro that allows designers to upload user data as a CSV,
        saving us all time!
      </p>
      <img src={`${imgPrefix}4.png`} alt="Table component" />
      <p>
        Once Pyro was close to being ready for release, a teammate and I
        conducted ten user testing sessions with Intuit designers. We wanted to
        learn if there were any major usability issues blocking the release and
        get feedback on what features should be added to Pyro. The reaction from
        our participants was very positive and they were excited to use Pyro
      </p>
      <p>
        The main issues that came out of testing were:
        <br />
        1. The onboarding flow was too long and there was more information than
        users could process.
        <br />
        2. Users expected to be able to undo and redo changes. (At the time of
        testing, this feature was still in development)
        <br />
        3. Adding a new page to the prototype was not intuitive.
      </p>
      <img src={`${imgPrefix}5.png`} alt="Testing results" />

      <p>
        The majority of the issues from user testing were addressed and Pyro
        released to Intuit designers in November 2020. Our goal going forward is
        to continue to drive the adoption of Pyro across the Intuit design
        community. We will do this by hosting virtual demo events and supporting
        our users by adding requested features.
      </p>
    </>
  ),
};

export default Pyro;
