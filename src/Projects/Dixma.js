import getImgPrefix from "../util/getImgPrefix";

const imgFolder = "Dixma";
const imgPrefix = getImgPrefix(imgFolder);

const Dixma = {
  title: "Dixma",
  subTitle: "Figma plugin for Dixit card game",
  coverImageSrc: `${imgPrefix}/1.png`,
  coverPosition: "center",
  passwordRequired: false,
  overview: {
    problem:
      "The Design Technology team is in need of a way to connect virtually while working from home. We've found that playing games together is a great way to relax and build team spirit.",
    goal: "Create a Figma plugin that allows us to play the board game Dixit.",
    role: "I worked on a team of four Design Technologists. My primary contribution was writing the plugin code that dealt cards to players and moved submitted cards to the main game board.",
    dates: "August 2020",
    technologies: "Figma Plugin API, Typescript",
  },
  links: [
    {
      title: "Figma Plugin",
      url: "https://www.figma.com/community/plugin/889931101393641155/dixma",
    },
    {
      title: "Game Board File",
      url: "https://www.figma.com/community/file/889925301071649823",
    },
    {
      title: "Code",
      url: "https://github.com/brettlyne/dixma",
    },
  ],
  content: (
    <>
      <p>
        My team at Intuit does hackathons every quarter. For the August 2020
        hackathon, I suggested we recreate a board game that we could play
        together online. We chose the card game{" "}
        <a href="https://boardgamegeek.com/boardgame/39856/dixit">Dixit</a> and
        decided to make it a{" "}
        <a href="https://www.figma.com/plugin-docs/intro/">Figma plugin</a>{" "}
        since Figma allows for collaborative interaction. The name "Dixma" came
        from the combination of Dixit + Figma.
      </p>
      <img src={`${imgPrefix}1.png`} alt="Dixma cover art" />

      <p>
        The game starts with players choosing a color to add their name to the
        list of players. One or more players can run the Dixma plugin within
        Figma to start the game and control the gameplay.
      </p>
      <img src={`${imgPrefix}2.png`} alt="Players adding names to list" />

      <p>
        When the first round starts, each player gets a page created within the
        Figma document. This page holds the six cards they have in their hand
        each round. This is also where they can submit cards and voting tokens
        to the main game board. Players are on the honor system to not look at
        other player's pages.
      </p>
      <img src={`${imgPrefix}3.png`} alt="Player's hand" />

      <p>
        Each round, one player is the storyteller and gives a short clue to
        describe a card in their deck. All other players submit a card that they
        think best matches the clue. Once everyone has submitted, the player
        controlling the plugin reveals the cards in the "Card Play Area".
      </p>
      <img src={`${imgPrefix}4.png`} alt="Cards moved to 'Card Play Area'" />

      <p>
        Next, players look at the cards played and vote for the card they think
        fits with the clue given. Players must determine their scores and move
        their tokens on the game board. The next round begins and rounds
        continue until someone reaches 30 points.
      </p>
      <img src={`${imgPrefix}5.png`} alt="Players voting" />

      <p>
        This plugin was written in Typescript and was primarily developed over
        two days. I had never used Typescript or created a Figma plugin before
        so it was a rapid learning process! If I were to continue working on
        this, I would consider adding automatic scoring. This was a fun project
        to work on and my team enjoys playing Dixma together online.
      </p>
    </>
  ),
};

export default Dixma;
