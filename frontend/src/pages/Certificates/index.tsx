import { useEffect, useState } from 'react';
import { TitlePage } from '../../components/TitlePage';
import { Filter } from '../../components/Filter';
import { CertificatesModal } from '../../modals/Certificates';
import { CertificatesData } from '../../data/Certificates';
import { CertificateType } from '../../@types/certificates';
import { getIndexMap, setBorderColor } from '../../utils/Functions';
import { borderColors } from '../../styles/global';
import { CertificatesContainer, Content, Certificate, Image, Title } from './styles';

export function Certificates() {
  const [certificatesList, setCertificatesList] = useState<CertificateType[] | []>(CertificatesData);
  const [certificatesFiltered, setCertificatesFiltered] = useState<CertificateType[]>(certificatesList);
  const [isListInHover, setIsListInHover] = useState<boolean>(false);
  const [isItemInHover, setIsItemInHover] = useState<string | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateType | null>(null);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    setCertificatesList(CertificatesData)
  }, []);

  useEffect(() => {
    const map = getIndexMap(CertificatesData);

    setIndexMap(map);
  }, [])

  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    };

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCertificate]);

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId)
  }

  function handleMouseEnterList(isHover: boolean) {
    setIsListInHover(isHover);
  }

  function handleMouseEnterItem(itemId: string | null) {
    setIsItemInHover(itemId)
  }

  function selectCertificate(certificate: CertificateType | null) {
    setSelectedCertificate(certificate);
  }

  return (
    <CertificatesContainer>
      <TitlePage title="Certificates" />

      <Filter list={certificatesList} setListFiltered={setCertificatesFiltered} />

      <Content
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        {
          certificatesFiltered.map((certificate) => {
            return (
              <Certificate
                key={certificate.id}
                borderColor={getBorderColor(certificate.id)}
                isListInHover={isListInHover}
                isItemInHover={certificate.id === isItemInHover}
                onMouseEnter={() => handleMouseEnterItem(certificate.id)}
                onMouseLeave={() => handleMouseEnterItem(null)}
                title={`${certificate.name} certificate`}
                onClick={() => selectCertificate(certificate)}
              >
                <Image
                  src={certificate.image}
                  alt=''
                />
                <Title>{certificate.name}</Title>
              </Certificate>
            )
          })
        }
      </Content>

      {
        selectedCertificate && (
          <CertificatesModal
            certificate={selectedCertificate}
            toggleOpenModal={() => selectCertificate(null)}
          />
        )
      }
    </CertificatesContainer>
  );
}
