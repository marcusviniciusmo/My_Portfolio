import { Terminal, Close, RocketLaunch, Code, Image } from '@mui/icons-material';
import { ProjectType } from '../../@types/projects';
import * as Styles from './styles';

interface ProjectsModalProps {
  project: ProjectType;
  toggleOpenModal: () => void;
}

export function ProjectsModal({
  project,
  toggleOpenModal
}: ProjectsModalProps) {
  function getDateCreateAt(date: string) {
    const dateFormatted = new Date(date);

    return dateFormatted.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    }).replace(' ', '/');
  }

  return (
    <Styles.ProjectsModalOverlay>
      <Styles.ModalContainer>
        <Styles.ModalHeader>
          <Styles.ModalTitleContainer>
            <Styles.ModalTitleIcon>
              <Terminal fontSize='large' />
            </Styles.ModalTitleIcon>

            <div>
              <Styles.ModalTitle>{project.name}</Styles.ModalTitle>
              <Styles.ModalDescription>{project.description}</Styles.ModalDescription>
            </div>
          </Styles.ModalTitleContainer>

          <Styles.ModalCloseButton>
            <Close
              fontSize='large'
              onClick={toggleOpenModal}
              titleAccess='Close'
            />
          </Styles.ModalCloseButton>
        </Styles.ModalHeader>

        <Styles.ModalContent>
          <Styles.ModalContentItem>
            <span>Create at: </span>{getDateCreateAt(project.createdAt)}
          </Styles.ModalContentItem>

          <div className='itemsContent'>
            <Styles.ModalContentItem>
              <a href={project.url} target='_blank' title='View Project'>
                <RocketLaunch fontSize='large' />
                <span>Launch</span>
              </a>
            </Styles.ModalContentItem>

            <Styles.ModalContentItem>
              <a href={project.urlRepository} target='_blank' title='View Repository'>
                <Code fontSize='large' />
                <span>Code</span>
              </a>
            </Styles.ModalContentItem>

            <Styles.ModalContentItem>
              <a href={project.image} target='_blank' title='View Image'>
                <Image />
                <span>Image</span>
              </a>
            </Styles.ModalContentItem>
          </div>

          <Styles.ModalDivider />

          <Styles.ModalFooter>
            {
              project.technologies.map((tech, index) => {
                return (
                  <Styles.ModalTechnologyContainer key={index}>
                    {tech}
                  </Styles.ModalTechnologyContainer>
                )
              })
            }
          </Styles.ModalFooter>

        </Styles.ModalContent>
      </Styles.ModalContainer>
    </Styles.ProjectsModalOverlay>
  );
}