import { useEffect, useState } from 'react';
import { GitHub, Tv } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { TitlePage } from '../../components/TitlePage';
import { Filter } from '../../components/Filter';
import { Loading } from '../../components/Loading';
import { ProjectsModal } from '../../modals/Projects';
import { ProjectType, ProjectTypeFromApi } from '../../@types/projects';
import { projectImages } from '../../data/Projects';
import { setBorderColor, getIndexMap } from '../../utils/Functions';
import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export function Projects() {
  const [projectsList, setProjectsList] = useState<ProjectType[]>([]);
  const [projectsFiltered, setProjectsFiltered] = useState<ProjectType[]>(projectsList);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isListInHover, setIsListInHover] = useState<boolean>(false);
  const [isItemInHover, setIsItemInHover] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());

  const baseUrl = 'https://api.github.com/users';
  const username = 'marcusviniciusmo';
  const perPage = 'per_page=100';
  const page = 'page=1';

  useEffect(() => {
    fetch(`${baseUrl}/${username}/repos?${perPage}&${page}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(true);
        const formattedData = getFormattedProjects(data);

        const sortedData = getSortedProjects(formattedData);

        setProjectsList(sortedData)
      })
      .catch((error) => {
        toast.error(`Error! ${error}.`);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  useEffect(() => {
    const map = getIndexMap(projectsList);

    setIndexMap(map);
  }, [projectsList])

  function getFormattedProjects(projects: ProjectTypeFromApi[]) {
    const formattedData = projects.map((project) => ({
      id: project.id,
      name: project.name,
      description: project.description,
      image: projectImages[project.id],
      url: '',
      urlRepository: project.html_url,
      createdAt: project.created_at,
      technologies: project.topics
    }))

    return formattedData;
  }

  function getSortedProjects(projects: ProjectType[]) {
    return projects.sort((a: ProjectType, b: ProjectType) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  }

  function handleMouseEnterList(isHover: boolean) {
    setIsListInHover(isHover);
  }

  function handleMouseEnterItem(itemId: string | null) {
    setIsItemInHover(itemId)
  }

  function selectProject(project: ProjectType) {
    setSelectedProject(project);
  }

  return (
    <Styles.ProjectsContainer>
      <TitlePage title="Projects" />

      <Filter list={projectsList} setListFiltered={setProjectsFiltered} />

      {
        isLoading ? (
          <Loading />
        ) : (
          <Styles.Content
            onMouseEnter={() => handleMouseEnterList(true)}
            onMouseLeave={() => handleMouseEnterList(false)}
          >
            {
              projectsFiltered.map((project) => {
                return (
                  <Styles.Project
                    key={project.id}
                    title={project.name}
                    borderColor={getBorderColor(project.id)}
                    isListInHover={isListInHover}
                    isItemInHover={isItemInHover === project.id}
                    onMouseEnter={() => handleMouseEnterItem(project.id)}
                    onMouseLeave={() => handleMouseEnterItem(null)}
                    onClick={() => selectProject(project)}
                  >
                    <Styles.Image>
                      <img src={project.image} alt={`${project.name} image`} />
                    </Styles.Image>

                    <Styles.Name>{project.name}</Styles.Name>

                    <Styles.Links>
                      <Styles.Repository
                        href={project.urlRepository}
                        target='_blank'
                        title='View Repository'
                      >
                        <GitHub fontSize='large' />
                      </Styles.Repository>

                      <Styles.Url
                        href={project.url}
                        target='_blank'
                        title='View Project'
                      >
                        <Tv fontSize='large' />
                      </Styles.Url>
                    </Styles.Links>
                  </Styles.Project>
                )
              })
            }
          </Styles.Content>
        )
      }

      {
        selectedProject && (
          <ProjectsModal
            toggleOpenModal={() => setSelectedProject(null)}
          />
        )
      }

    </Styles.ProjectsContainer>
  );
}
