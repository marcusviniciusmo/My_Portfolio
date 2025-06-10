import { ProjectType } from '../../@types/projects';

export interface ProjectsModalProps {
  project: ProjectType;
  toggleOpenModal: () => void;
}