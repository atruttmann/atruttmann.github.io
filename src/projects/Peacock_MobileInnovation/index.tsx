import type { ProjectData } from "@types";
import Image from "@/components/Image/Image";
import Video from "@/components/Video/Video";
import Link from "@/components/Link/Link";
import Cover from "./Cover.png";
import Rail from "./Rail.png";
import Splash from "./Splash.png";
import Prediction from "./Prediction.png";
import Venn from "./Venn.png";
import DemoVideo from "./Demo.mp4";
import Research from "./Research.jpg";

const MobileInnovation: ProjectData = {
  title: "Mobile Gaming",
  subTitle: "iOS prototype for Peacock",
  coverImageSrc: Cover,
  coverPosition: "center",
  passwordRequired: true,
  overview: {
    problem:
      "How can Peacock make the leap from being just another streaming app to being an entertainment platform?",
    goal: "Develop an iOS prototype of the Peacock app that integrates eight mobile games from two external vendors.",
    outcome:
      "The prototype was tested with 40 users. The games and clips features were A/B tested in Q1 of 2025 and fully released by Q2 2025.",
    role: "I led the game integration into the app and contributed a vertical video feature also included in this prototype.",
    technologies: "SwiftUI, iOS",
    dates: "September - October 2024",
  },
  links: [
    {
      title: "Slate: Streaming Services Are in for Some Big, Big Changes",
      url: "https://slate.com/technology/2025/01/nbc-peacock-streaming-service-television-movie-app-change-2025.html",
    },
  ],
  content: (
    <>
      <p>
        In the fall of 2024 Peacock decided to take a big swing and explore the
        integration of mobile games and vertical video clips into our app. The
        goal of our team was to launch these features by January 2025 to align
        with the release of a new season of The Traitors. With this ambitious
        timeline, we needed to dive into prototyping right away to ensure these
        new features would land well with our users.
      </p>

      <Video src={DemoVideo} mobile caption="Full demo of the prototype" />

      <p>
        The only problem? I had never done a mobile prototype before. I had less
        than two months to learn iOS and deliver a complex prototype with
        frequent design changes.
      </p>

      <p>
        I got to work right away learning iOS and SwiftUI to build the
        prototype. I custom-built several features including a rail of tiles to
        launch the games, a sheet component to display content, and splash
        screens to introduce the games.
      </p>

      <div className="multiImg">
        <Image src={Rail} mobile caption="Games rail" />
        <Image src={Splash} mobile caption="Splash screen" />
      </div>

      <p>
        Peacock partnered with two vendors,{" "}
        <Link href="https://www.lilsnack.co/v2">Lil Snack</Link> and{" "}
        <Link href="https://monterosa.co/">Monterosa</Link>, to integrate their
        games into the prototype. I incorporated their games using a{" "}
        <Link href="https://developer.apple.com/documentation/webkit/wkwebview">
          WebView
        </Link>{" "}
        within the app. I worked with the vendors to improve their loading
        performance and align their designs with Peacock's branding. By testing
        the vendor's games in the prototype we were able to clarify for the
        engineering team which parts of the design Peacock would build and which
        parts would be handled by the vendors.
      </p>

      <p>
        Lil Snack created mini games that featured NBC show content. These games
        were designed to encourage users to return for daily play. Monterosa
        created prediction games that were available before a live event such as
        a sports game or episode of reality TV. Users were encouraged to come
        back and watch the event by adding it to "My Stuff".
      </p>

      <div className="multiImg">
        <Image src={Prediction} mobile caption="Traitors predictions" />
        <Image src={Venn} mobile caption="Mini game" />
      </div>

      <p>
        This prototype was tested with 40 users in October 2024. Testing helped
        us determine which games were well-received and would be part of the
        initial launch.
      </p>

      <Image src={Research} mobile caption="User research results" />

      <p>
        This feature was A/B tested in Q1 of 2025 and fully released by Q2 2025.
      </p>
    </>
  ),
};

export default MobileInnovation;
