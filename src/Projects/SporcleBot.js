const imgFolder = "SporcleBot";
const imgPrefix = `${process.env.PUBLIC_URL}images/${imgFolder}/`;

const SporcleBot = {
  title: "SporcleBot",
  subTitle: "Building a Slack Bot",
  imageFolderName: imgFolder,
  coverImageName: "Cover",
  passwordRequired: false,
  links: [],
  overview: [
    {
      title: "Problem",
      content:
        "While we've been working remotely, my team has participated in a Sporcle challenge daily. We wanted to automate scoring the leaderboard and notifying the winner to pick the following day's quiz.",
    },
    {
      title: "Goal",
      content:
        "Develop a Slackbot that can parse our score messages and generate a leaderboard.",
    },
    {
      title: "Role",
      content:
        "I worked with a team of three Design Technologists. My area of focus was sending messages to our image recognition service and parsing messages to create the leaderboard.",
    },
    { title: "Dates", content: "February 2021" },
  ],
  content: (
    <>
      <p>
        My team at Intuit does hackathons every quarter. For this hackathon, I
        suggested that we work on a Slackbot that would generate a leaderboard
        based on <a href="https://www.sporcle.com/">Sporcle</a> quiz scores.
        We've been doing daily Sporcle challenges since work from home started.
        The rules are simple - take the quiz, post your score as a screenshot,
        and the person with the highest score gets to pick the next day's quiz.
        One small issue we've run into is if the winner forgets to post the next
        quiz, sometimes we'll go days or weeks without playing. I wanted to have
        a bot post a leaderboard message as a gentle nudge to remind the winner
        to post a quiz, as well as show all participants how they ranked.
      </p>

      <img
        className="withCaption"
        style={{ maxWidth: "20rem" }}
        src={`${imgPrefix}1.png`}
        alt="Current challenge flow with scores posted."
      />
      <p className="body2 caption">
        The current challenge flow with scores posted as screenshots.
      </p>

      <p>
        After getting set up with <a href="https://api.slack.com/">Slack API</a>
        , we realized we needed a server to communicate with Slack. One of my
        teammates set up a{" "}
        <a href="https://www.digitalocean.com/">Digital Ocean</a> droplet where
        we could host our code.
      </p>
      <p>
        Our code was split up into three sections.
        <br />
        1. <a href="https://api.slack.com/messaging/webhooks">Webhooks</a> which
        subscribed to events happening in our Sporcle channel. We used this for
        for welcoming users to the channel and sending score images to be
        parsed.
        <br />
        2. Optical Character Recognition (OCR) which parsed the score
        screenshots and return text. We used{" "}
        <a href="https://tesseract.projectnaptha.com/">Tessaract.js</a> for
        this.
        <br />
        3. Scheduled events, which would post the leaderboard and remind the
        channel if no one had posted a challenge.
      </p>

      <p>
        When users join the Sporcle channel, SporcleBot posts a message that is
        only visible to the user that tells them the rules.
      </p>
      <img
        src={`${imgPrefix}2.png`}
        style={{ maxWidth: "40rem" }}
        alt="The Sporcle welcome message"
      />

      <p>
        When a Sporcle challenge is posted, the bot posts a reply message
        letting the user know the bot will keep track of everyone's scores. As
        scores are posted, the images are processed with OCR to extract the
        score and time. The message is edited to include scores with the format:
        "Alayna Truttmann scored 73/73 with 00:19 remaining".
      </p>
      <img
        style={{ maxWidth: "20rem" }}
        src={`${imgPrefix}3.png`}
        alt="The bot keeps track of scores during the challenge"
      />

      <p>
        If the image processor cannot get a score and time from the image, it
        sends back an error message with details about why the processing
        failed. The error is posted in a message that is only visible to the
        user.
      </p>
      <img
        style={{ maxWidth: "20rem" }}
        src={`${imgPrefix}4.png`}
        alt="Showing an error message if the score couldn't be processed"
      />

      <p>
        Participants can post their scores until 7:00am the following day. At
        that time, the leaderboard is posted with the ranking of the players.
        The person with the highest score gets to pick the next challenge
        (unless they are the original poster). If the winner doesn't post a
        challenge by 12:00pm, the bot sends a reminder to the channel.
      </p>
      <img
        src={`${imgPrefix}5.png`}
        alt="The leaderboard and reminder messages"
      />

      <p>
        This bot was created primarily with Javascript and developed over the
        course of four days. It was really fun for me to learn how to use the
        Slack API and practice my asynchronous Javascript skills.
      </p>
    </>
  ),
};

export default SporcleBot;
