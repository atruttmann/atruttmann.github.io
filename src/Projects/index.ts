import type { ProjectData } from "@types";
import Pyro from "./Intuit_Pyro";
import Toolkit from "./Intuit_Toolkit";
import Flow from "./Roku_Flow";
import Puffin from "./Roku_Puffin";
import Oso from "./Roku_Oso";
import UXE from "./Roku_UXE";
import NBCUX from "./NBCUX";
import MobilePlayer from "./Peacock_MobilePlayer";
import MobileInnovation from "./Peacock_MobileInnovation";
import VisMerchEditor from "./Peacock_VisMerchEditor";
import InstantTranslation from "./Peacock_Translation";

const ProjectsList: ProjectData[] = [
  MobilePlayer,
  MobileInnovation,
  VisMerchEditor,
  InstantTranslation,
  NBCUX,
  Flow,
  Oso,
  Puffin,
  UXE,
  Toolkit,
  Pyro,
];

export default ProjectsList;
