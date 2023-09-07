import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "VideoGameOlympics";
const imgPrefix = getImgPrefix(imgFolder);

const VideoGameOlympics = {
  title: "Video Game Olympics",
  subTitle: "Personal project using Google Sheets API",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "top center",
  passwordRequired: false,
  overview: {
    problem:
      "How can we display data from a video game tournament in real time?",
    goal: "Create a website that pulls live data from a Google spreadsheet to display a leaderboard and challenges list.",
    role: "I designed and developed this website as a personal project.",
    dates: "September - October 2021",
    technologies: "React, Google Spreadsheet API",
  },
  links: [
    {
      title: "Video Game Olympics website",
      url: "https://alaynatruttmann.com/video-game-olympics/",
    },
    {
      title: "GitHub repository",
      url: "https://github.com/atruttmann/video-game-olympics",
    },
  ],
  content: (
    <>
      <p>
        I was inspired to work on this project by my partner, who hosted a video
        game tournament where his friends would complete challenges for points.
        While the event was happening, he wanted to show players a countdown
        timer, a leaderboard, and a list of challenges. In the background, my
        partner would review challenge submissions and enter player scores in a
        spreadsheet. I used his ideas to build a website where all this
        information could be displayed.
      </p>
      <p>
        I started by making a list of the requirements for the product and doing
        a simple sketch to plan the layout. I chose two monospaced fonts to
        evoke a retro video game feel. I added emojis to the leaderboard to
        denote the top players.
      </p>
      <img src={`${imgPrefix}1.png`} alt="Leaderboard" />
      <p>
        I built this project using React and SCSS. I used{" "}
        <a href="https://github.com/theoephraim/node-google-spreadsheet">
          google-spreadsheet
        </a>
        , a Google Sheets API wrapper for JavaScript, to pull the data from the
        spreadsheet of scores. Since this data needed to update as the
        spreadsheet was edited, I refreshed the data every five seconds.
      </p>
      <p>
        Players earned points by doing challenges. The relevant data they needed
        to know was the challenge description and how many points were up for
        grabs. A maximum of three players could score for each challenge, so
        challenges that were no longer available were grayed out.
      </p>
      <img src={`${imgPrefix}2.png`} alt="Challenges" />
      <p>
        This website was built with a responsive design. I expected most players
        to view the site on their laptops, but they had the option of viewing it
        on their phone (or any device) if they preferred. Any overflowing
        content in the tables can be accessed by scrolling horizontally.
      </p>
      <div className="twoImg">
        <img src={`${imgPrefix}3.png`} alt="Viewed on phone" />
        <img src={`${imgPrefix}4.png`} alt="Viewed on tablet" />
      </div>
      <p>
        At the end of the tournament, the countdown was replaced with a message
        declaring the winner. The event went well and the players enjoyed using
        the website.
      </p>
      <img src={`${imgPrefix}5.png`} alt="Winner" />
      <p>
        This was a fun project, and a great way to learn to use Google Sheets as
        a backend. If I were to continue working on this, I would get more user
        feedback to understand if the challenges table was meeting the needs of
        the players. It could be sorted differently, or maxed out challenges
        could be hidden. It would also be cool to explore a player submission
        functionality so some of the behind the scenes work could be automated.
      </p>
    </>
  ),
};

export default VideoGameOlympics;
