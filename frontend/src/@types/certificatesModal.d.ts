import { CertificateType } from '../../@types/certificates';

export interface CertificatesModalProps {
  certificate: CertificateType;
  toggleOpenModal: () => void;
}