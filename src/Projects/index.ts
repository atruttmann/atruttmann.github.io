import type { ProjectData } from "@types";
import Pyro from "./Pyro";
import Toolkit from "./Toolkit";
import Flow from "./Flow";
import Puffin from "./Puffin";
import Oso from "./Roku_Oso";
import UXE from "./Roku_UXE";
import NBCUX from "./NBCUX";
import MobilePlayer from "./Peacock_MobilePlayer";
import VisMerchEditor from "./Peacock_VisMerchEditor";

const ProjectsList: ProjectData[] = [
  MobilePlayer,
  VisMerchEditor,
  NBCUX,
  Flow,
  Oso,
  Puffin,
  UXE,
  Toolkit,
  Pyro,
];

export default ProjectsList;
