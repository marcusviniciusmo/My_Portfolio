export interface CertificateType {
  id: string;
  name: string;
  image: string;
  workload?: string;
  instructor?: string;
  institution?: string;
  conclusion: string;
  type: 'Graduation' | 'Certification' | 'Certificate';
  score?: string;
  sharingLink?: string;
  area: string;
}

export interface CertificateProps {
  borderColor: string;
  isListInHover: boolean;
  isItemInHover: boolean;
}