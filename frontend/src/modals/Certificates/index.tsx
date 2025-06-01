interface CertificatesModalProps {
  toggleOpenModal: () => void;
}

export function CertificatesModal({ 
  toggleOpenModal 
}: CertificatesModalProps) {
  return (
    <>
      <h1>CERTIFICATES MODAL</h1>
      <span onClick={toggleOpenModal}>X</span>
    </>
  )
}