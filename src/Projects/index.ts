import type { ProjectData } from '@types';
import Pyro from './Intuit_Pyro';
import Toolkit from './Intuit_Toolkit';
import Flow from './Roku_Flow';
import Puffin from './Roku_Puffin';
import Oso from './Roku_Oso';
import UXE from './Roku_UXE';
import NBCUX from './NBCUX';
import MobilePlayer from './Peacock_MobilePlayer';
import MobileInnovation from './Peacock_MobileInnovation';

const ProjectsList: ProjectData[] = [
  MobilePlayer,
  MobileInnovation,
  NBCUX,
  Flow,
  Oso,
  Puffin,
  UXE,
  Toolkit,
  Pyro,
];

export default ProjectsList;
