export interface ProjectType {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  urlRepository: string;
  createdAt: string;
  technologies: string[];
}

export interface ProjectTypeFromApi {
  id: string;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  topics: string[];
}

export interface ProjectsProps {
  borderColor: string;
  isListInHover: boolean;
  isItemInHover: boolean;
}