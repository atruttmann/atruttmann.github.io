const imgFolder = "TransactionsTable";
const imgPrefix = `${process.env.PUBLIC_URL}images/${imgFolder}/`;

const TransactionsTable = {
  title: "Transaction Categorization",
  subTitle: "Prototype testing with customer data",
  imageFolderName: imgFolder,
  passwordRequired: true,
  links: [],
  overview: [
    {
      title: "Problem",
      content:
        "This prototype addresses two QuickBooks customer needs. Customers need onboarding to show them how to automate categorizing their transactions. Customers also need to see all their transactions in one table to get insights into the health of their small business.",
    },
    {
      title: "Goal",
      content:
        "Create a React prototype for customer testing that leverages their own transaction data to create a more realistic experience.",
    },
    {
      title: "Role",
      content:
        "I was the sole developer for this project and partnered with a product designer to create this prototype.",
    },
    { title: "Dates", content: "April - June 2020" },
  ],
  content: (
    <>
      <p>
        This prototype was tested with eight QuickBooks customers to understand
        their needs, expectations, and mental modal for automating tasks and
        managing transactions. For each test, the prototype was customized with
        customer transaction data to create a more realistic experience. The
        prototype was built with React within my team's existing prototype
        framework.
      </p>
      <video className="withCaption" controls muted preload="none">
        <source src={`${imgPrefix}Demo.mp4`} type="video/mp4" />
      </video>
      <p className="body2 caption">
        <i>This video shows the entire flow of the testing.</i>
      </p>

      <p>
        The research team created this customer problem statement for the
        automation part of the testing: "I am a small business owner handling
        accounting for my business. I am trying to save time on repetitive
        accounting tasks, but I am unable to automate any of my work in
        QuickBooks. QuickBooks makes some recommendations, but I don't trust
        them. I don't understand what I need to do in QuickBooks to reduce my
        work, and I don't know how QuickBooks makes recommendations."
      </p>
      <p>
        The first part of the testing session focused on having the user
        categorize their transactions to train the recommendation model. The
        prototype was not connected to a machine learning model, but would be if
        built in product.
      </p>
      <img src={`${imgPrefix}1.png`} alt="Categorizing a transaction" />

      <p>
        Once users had categorized a few transactions, they could continue the
        training and review more suggested categories. They could revisit this
        experience at any time.
      </p>
      <img src={`${imgPrefix}2.png`} alt="Categorizing more transactions" />

      <p>
        Next, users could edit a list to indicate their vendors and customers.
      </p>
      <img src={`${imgPrefix}3.png`} alt="Editing customers and vendors" />

      <p>
        The second part of the session focused on testing the usability of a
        transactions table. Currently in QuickBooks product, a user's
        transactions are separated on different pages by type. This table
        brought all transactions into one place. The design team's hope is that
        showing all transactions in one table will help small businesses get
        immediate value from QuickBooks by using it as a source of truth for
        their finances.
      </p>
      <img src={`${imgPrefix}4.png`} alt="Transactions table" />

      <p>
        From a development perspective, the transactions table was the most
        complex part of the prototype to create. Every field in the table was
        editable. Data needed to be filtered by type, status, date, and more. It
        also needed to be sortable, groupable, and searchable. I was able to
        leverage several components from Intuit's design system, but there was
        still a lot of custom work to be done.
      </p>
      <p>
        I provided each user with a custom link to the prototype that had their
        transactions. It was not necessary to sync changes to the table to a
        backend for this prototype, so any changes a user made were stored in
        their browser.
      </p>
      <img src={`${imgPrefix}5.png`} alt="Searching the transactions table" />

      <p>
        Testing this prototype helped the design team I partnered with gain a
        better understanding of the customer problems around managing
        transactions and automation. It also verified that the improvements
        shown in the prototype would help solve these issues. The reaction from
        users and our design leaders was great, and the project moved forward to
        be built into production.
      </p>
    </>
  ),
};

export default TransactionsTable;
