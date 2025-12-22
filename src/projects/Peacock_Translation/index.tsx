import type { ProjectData } from "@types";
import Image from "@components/Image/Image";
import Link from "@components/Link/Link";
import Video from "@components/Video/Video";
import Cover from "./Cover.png";
import Demo from "./Demo.mp4";
import CharactersTranslated from "./CharactersTranslated.png";
import TopLanguages from "./TopLanguages.png";

const InstantTranslation: ProjectData = {
  title: "Instant Translation",
  subTitle: "Figma plugin leveraging AI translations",
  coverImageSrc: Cover,
  coverPosition: "center",
  passwordRequired: false,
  overview: {
    problem:
      "Peacock designers need a quick way to stress test their designs to ensure they work in multiple languages.",
    goal: "Automate the translation of text layers in Figma using Azure AI Translator.",
    outcome:
      "In 2025 the plugin had 21 active users that translated approximately 3,000 text layers totaling 81,000 characters in Figma.",
    role: "I was the sole developer on this project.",
    technologies: "Figma Plugin API, Azure Translator, TypeScript, React",
    dates: "March - April 2024",
  },
  content: (
    <>
      <p>
        A content strategist at Peacock came to me with a problem: how could we
        make it easy for designers to test their designs in multiple languages?
        Peacock already had an established system for official translations
        using Smartling, but at the time there was no simple way to perform
        translations directly within Figma.
      </p>

      <p>
        I began by researching different translation service options, focusing
        primarily on Google Translate and{" "}
        <Link href="https://azure.microsoft.com/en-us/products/ai-foundry/tools/translator">
          Azure Translator
        </Link>{" "}
        due to their accuracy, feature sets, and low cost. Based on our
        anticipated usage, Azure Translator best fit Peacock's needs. I set up a
        translation resource in Azure that the plugin could call via their REST
        API.
      </p>

      <Video
        src={Demo}
        caption="Demo of translating multiple text layers using the plugin"
      />

      <p>
        Users can select a single text layer or a top-level group or frame to
        translate all text within it. The plugin supports translations for the
        25 languages Peacock is available in. Additionally, users can choose the
        longest (typically German or Hungarian) or shortest (typically Czech)
        translation to help stress-test designs. Users can also revert back to
        the original text if needed.
      </p>

      <p>
        I added <Link href="https://mixpanel.com/">Mixpanel analytics</Link> to
        track plugin usage, including what users were translating and any errors
        encountered.
      </p>

      <Image
        src={CharactersTranslated}
        caption="Total characters translated in 2025"
      />
      <Image src={TopLanguages} caption="Top languages used in 2025" />

      <p>
        A few months after the plugin launched, Figma announced AI-powered
        translations built directly into the product. However, NBC currently
        does not have access to Figma's AI features, so this plugin remains
        highly valuable to the design team.
      </p>
    </>
  ),
};

export default InstantTranslation;
