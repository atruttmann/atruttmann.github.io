const Dixma = {
  title: "Dixma",
  subTitle: "Figma plugin for Dixit card game",
  imageFolderName: "Dixma",
  passwordRequired: false,
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
  tldr: [],
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
      <p>
        The game starts with players choosing a color to add their name to the
        list of players. One or more players can run the Dixma plugin within
        Figma to start the game and control the gameplay.
      </p>
      <p>
        When the first round starts, each player gets a page created within the
        Figma document. This page holds the six cards they have in their hand
        each round. This is also where they can submit cards and voting tokens
        to the main game board. Players are on the honor system to not look at
        other player's pages.
      </p>
      <p>
        Each round, one player is the storyteller and gives a short clue to
        describe a card in their deck. All other players submit a card that they
        think best matches the clue. Once everyone has submitted, the player
        controlling the plugin reveals the cards in the "Card Play Area".
      </p>
      <p>
        Next, players look at the cards played and vote for the card they think
        fits with the clue given. Players must determine their scores and move
        their tokens on the game board. The next round begins and rounds
        continue until someone reaches 30 points.
      </p>
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
