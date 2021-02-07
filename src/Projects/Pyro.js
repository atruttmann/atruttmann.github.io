const Pyro = {
  title: "Pyro",
  subTitle: "Prototyping tool for Intuit designers",
  passwordRequired: false,
  links: [
    {
      title: "Pyro",
      url: "https://pyro-intuit.web.app/",
    },
  ],
  imageFolderName: "Pyro",
  slides: [
    <span>
      Pyro is a custom prototyping tool built by Intuit Design Technologists for
      Intuit designers. It allows anyone to create prototypes using Intuit
      Design System components, user data, and logic without writing any code. I
      have been working on this project since February 2020 improving the editor
      and creating features that cater to QuickBooks design needs.
    </span>,
    <span>
      We leveraged <a href="https://craft.js.org/">Craft.js</a> with React to
      create the drag and drop functionality in the editor. The prototype data
      syncs to a <a href="https://firebase.google.com/">Firebase</a> backend.
      Users can grab components from the left-side panel and drag them into the
      editor. When a component is selected, you can edit its properties in the
      right-side panel.
    </span>,
    <span>
      In addition to changing the style of components, you can also set an "on
      click" action for the component or conditionally show or hide it. This
      allows users to build complex prototypes with many pages and branching
      flows. This feature is particularly important for TurboTax designers who
      need to create flows with a series of questions.
    </span>,
    <span>
      Many QuickBooks designers need to incorporate real user data into customer
      testing sessions to help the customer feel like the prototype is real.
      Customer data often comes in the form of a list of transactions, and
      typically a Design Technologist would build a custom React prototype to
      display this data. We added an editable table component to Pyro that
      allows designers to upload user data as a CSV, saving us all time!
    </span>,
    <span>
      Working on Pyro has helped me expand my design and technical skills. I've{" "}
    </span>,
  ],
};

export default Pyro;
