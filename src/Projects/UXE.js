import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "UXE";
const imgPrefix = getImgPrefix(imgFolder);

const UXE = {
  title: "Roku UXE Team Site",
  subTitle: "Showcasing tools & prototypes",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "center top",
  passwordRequired: false,
  overview: {
    problem:
      "The Roku UX Engineering team needed a place to share their tools, prototypes, and roadmap.",
    goal: "Create a beautiful website that informs other designers about UX Engineering.",
    outcome:
      "The Roku design community was able to learn more about our team's work and how to connect with us.",
    role: "I was the sole designer and full stack engineer on this project.",
    technologies: "React, Node.js, AWS Dynamo DB, AWS S3, Jira API",
    dates: "September 2022 - August 2023",
  },
  content: (
    <>
      <p>
        The Roku UX Engineering team needed a way to increase our visibility to
        the rest of the design organization. A basic Confluence page would not
        do! This website needed to include our internal tools, prototypes, team
        roadmap, and FAQs about working with our team.
      </p>

      <p>
        When I started designing this project, I knew I wanted to use striking
        colors and lots of Roku purple. I was particularly inspired by an ad
        campaign Roku had done recently. I loved the rounded shapes and
        gradients and wanted to incorporate them in my designs. My goal was for
        the website to be attractive to designers and show off our UX
        Engineering front-end skills.
      </p>
      <img src={`${imgPrefix}2.jpg`} alt="Roku billboard ad" />

      <p>
        The first section of the site shows a list of our internal tools. Each
        tool has an accompanying video or image with links to its site. The tab
        arrangement on the left allows you to browse the details for each tool.
      </p>
      <img src={`${imgPrefix}1.png`} alt="Internal tools" />

      <p>
        The next section shows the prototypes the team has worked on. The list
        style mimics the experience of browsing content on a Roku device. You
        can search for prototypes, which is helpful because there are more than
        60 prototypes to view.
      </p>
      <img src={`${imgPrefix}3.png`} alt="Viewing prototypes" />

      <p>
        Each prototype can open in a modal. There you can see more project
        details and interact with prototype in an iframe.
      </p>
      <img src={`${imgPrefix}4.png`} alt="Prototypes detail view" />

      <p>
        I also added a hidden form where UX Engineers could add more prototypes
        to the list. The data is saved to AWS Dynamo DB and images are uploaded
        to AWS S3.
      </p>
      <img src={`${imgPrefix}5.png`} alt="Add prototype" />

      <p>
        The roadmap section displayed a calendar view of the projects the team
        is working on. This view syncs with Jira using the{" "}
        <a href="https://developer.atlassian.com/server/jira/platform/rest-apis/">
          Jira API
        </a>
        , so roadmap updates are automatic.
      </p>
      <img src={`${imgPrefix}6.png`} alt="Project roadmap" />

      <p>
        The FAQ section lets other designers know how best to work with our
        team. It includes two quizzes to assess whether a coded prototype is
        necessary and approximately how long a prototype will take to develop.
      </p>
      <img src={`${imgPrefix}7.png`} alt="FAQ section" />
      <img src={`${imgPrefix}8.png`} alt="Prototype quiz" />
    </>
  ),
};

export default UXE;
