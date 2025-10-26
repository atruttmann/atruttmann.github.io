export interface ProjectData {
  title: string;
  subTitle: string;
  coverImageSrc: string;
  coverPosition?: string;
  passwordRequired?: boolean;
  overview: ProjectOverview;
  links?: ProjectLink[];
  content: React.ReactNode;
}

export interface ProjectOverview {
  problem: string;
  goal: string;
  outcome?: string;
  role: string;
  technologies?: string;
  dates: string;
}

export interface ProjectLink {
  title: string;
  url: string;
}
