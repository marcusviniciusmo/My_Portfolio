interface CertificatesModalProps {
  toggleModal: () => void;
}

export function CertificatesModal({
  toggleModal
}: CertificatesModalProps) {
  return (
    <>
      <h1>CERTIFICATES MODAL</h1>
      <span onClick={toggleModal}>X</span>
    </>
  )
}