// Types for project_type
export type ProjectType = 'UI/UX Design' | 'Frontend Development' | 'Fullstack Development';

// Types for portfolioData
export interface PortfolioItem {
  id: number;
  project_title: string;
  project_type: ProjectType;
  project_tech_stack: string;
  project_role: string;
  project_team: string;
  project_description: string;
  project_thumbnail: string;
  project_screenshot: string;
  project_visible: boolean;
}