interface ProjectsModalProps {
  toggleOpenModal: () => void;
}

export function ProjectsModal({
  toggleOpenModal
}: ProjectsModalProps) {
  return (
    <>
      <h1>PROJECTS MODAL</h1>
      <span onClick={toggleOpenModal}>X</span>
    </>
  );
}