const imgFolder = "TransactionsTable";
const imgPrefix = `${process.env.PUBLIC_URL}images/${imgFolder}/`;

const TransactionsTable = {
  title: "Transactions Table",
  subTitle: "Prototype testing with customer data",
  imageFolderName: imgFolder,
  passwordRequired: false,
  links: [],
  tldr: [
    {
      title: "Problem",
      content:
        "This prototype addresses two QuickBooks customer needs. Customers need onboarding to show them how to automate categorizing their transactions. Customers also need to see all their transactions in one table to get insights into the health of their small business.",
    },
    {
      title: "Goal",
      content:
        "Create an interactive prototype for customer testing that leverages their own transaction data to create a more realistic experience.",
    },
    {
      title: "Role",
      content:
        "I was the sole developer for this project and worked with a product designer to create this protoype.",
    },
    { title: "Dates", content: "April - June 2020" },
  ],
  content: (
    <>
      <p></p>
      <img src={`${imgPrefix}2.png`} alt="Pyro editor" />

      <video className="withCaption" controls>
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>
      <p className="body2 caption">
        <i>This video shows the entire flow of the testing.</i>
      </p>
    </>
  ),
};

export default TransactionsTable;
