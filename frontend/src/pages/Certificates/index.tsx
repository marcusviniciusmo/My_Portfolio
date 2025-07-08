import { useEffect, useState } from 'react';
import { TitlePage } from '../../components/TitlePage';
import { Filter } from '../../components/Filter';
import { CertificatesModal } from '../../modals/Certificates';
import { CertificateType } from '../../@types/certificates';
import { getIndexMap, setBorderColor } from '../../utils/Functions';
import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export function Certificates() {
  const [certificatesList, setCertificatesList] = useState<CertificateType[]>(
    [],
  );
  const [certificatesFiltered, setCertificatesFiltered] =
    useState<CertificateType[]>(certificatesList);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isListInHover, setIsListInHover] = useState<boolean>(false);
  const [isItemInHover, setIsItemInHover] = useState<string | null>(null);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType | null>(null);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());

  const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
  const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

  useEffect(() => {
    setIsLoading(true);

    fetch(`${baseUrlApi}/certificates/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setCertificatesList(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const map = getIndexMap(certificatesFiltered);

    setIndexMap(map);
  }, [certificatesFiltered]);

  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCertificate]);

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  }

  function handleMouseEnterList(isHover: boolean) {
    setIsListInHover(isHover);
  }

  function handleMouseEnterItem(itemId: string | null) {
    setIsItemInHover(itemId);
  }

  function selectCertificate(certificate: CertificateType | null) {
    setSelectedCertificate(certificate);
  }

  return (
    <Styles.CertificatesContainer>
      <TitlePage title="Certificates" />

      <Filter
        list={certificatesList}
        setListFiltered={setCertificatesFiltered}
      />

      <Styles.Content
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        {isLoading ? (
          <>
            <Styles.CertificateSkeleton
              className={isLoading ? 'skeleton' : ''}
            />
          </>
        ) : (
          <>
            {certificatesFiltered
              .sort((a, b) => {
                const dateA = new Date(a.conclusion).getTime();
                const dateB = new Date(b.conclusion).getTime();

                return dateB - dateA;
              })
              .map((certificate) => {
                return (
                  <Styles.Certificate
                    key={certificate.id}
                    borderColor={getBorderColor(certificate.id)}
                    isListInHover={isListInHover}
                    isItemInHover={certificate.id === isItemInHover}
                    onMouseEnter={() => handleMouseEnterItem(certificate.id)}
                    onMouseLeave={() => handleMouseEnterItem(null)}
                    title={`${certificate.name} certificate`}
                    onClick={() => selectCertificate(certificate)}
                  >
                    <Styles.Image
                      src={`${baseUrlApi}/${certificate.image}`}
                      alt=""
                    />
                    <Styles.Title>{certificate.name}</Styles.Title>
                  </Styles.Certificate>
                );
              })}
          </>
        )}
      </Styles.Content>

      {selectedCertificate && (
        <CertificatesModal
          certificate={selectedCertificate}
          toggleOpenModal={() => selectCertificate(null)}
        />
      )}
    </Styles.CertificatesContainer>
  );
}
