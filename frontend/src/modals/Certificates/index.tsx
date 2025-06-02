import { Close, School } from '@mui/icons-material';
import { CertificatesModalProps } from '../../@types/certificatesModal';
import * as Styles from './styles';

export function CertificatesModal({
  certificate,
  toggleOpenModal
}: CertificatesModalProps) {
  function getWorkloadFormatted(workload: string) {
    return `${workload ? workload : 'N/A'}`;
  }

  function getInstructorFormatted(instructor: string) {
    return `${instructor ? instructor : 'N/A'}`;
  }

  function getInstitutionFormatted(institution: string) {
    return `${institution ? institution : 'N/A'}`;
  }

  function getScoreFormatted(score: string) {
    return `${score ? score : 'N/A'}`;
  }

  return (
    <Styles.CertificatesModalOverlay>
      <Styles.ModalContainer>
        <Styles.ModalHeader>
          <Styles.ModalTitleContainer>
            <Styles.ModalTitleIcon>
              <School fontSize='large' />
            </Styles.ModalTitleIcon>

            <div>
              <Styles.ModalTitle>{certificate.name}</Styles.ModalTitle>
              <Styles.ModalSubtitle>{certificate.type}</Styles.ModalSubtitle>
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
            <span>Workload: </span>{getWorkloadFormatted(certificate.workload!)}
          </Styles.ModalContentItem>
          <Styles.ModalContentItem>
            <span>Instructor: </span>{getInstructorFormatted(certificate.instructor!)}
          </Styles.ModalContentItem>
          <Styles.ModalContentItem>
            <span>Institution: </span>{getInstitutionFormatted(certificate.institution!)}
          </Styles.ModalContentItem>
          <Styles.ModalContentItem>
            <span>Conclusion: </span>{certificate.conclusion}
          </Styles.ModalContentItem>
          <Styles.ModalContentItem>
            <span>Score: </span>{getScoreFormatted(certificate.score!)}
          </Styles.ModalContentItem>
          <Styles.ModalContentItem>
            <span>Area: </span>{certificate.area}
          </Styles.ModalContentItem>

          <Styles.ModalDivider />

          <Styles.ModalFooter>
            <Styles.ModalButtonViewCertificate>
              <a href={certificate.image} target='_blank'>
                View Certificate
              </a>
            </Styles.ModalButtonViewCertificate>

            {
              certificate.sharingLink && (
                <Styles.ModalButtonViewCertificate>
                  <a href={certificate.sharingLink} target='_blank'>
                    Open Official Certificate
                  </a>
                </Styles.ModalButtonViewCertificate>
              )
            }
          </Styles.ModalFooter>

        </Styles.ModalContent>
      </Styles.ModalContainer>
    </Styles.CertificatesModalOverlay>
  )
}