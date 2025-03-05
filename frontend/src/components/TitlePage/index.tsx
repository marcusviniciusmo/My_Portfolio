interface TitlePageProps {
  title: string;
}

export function TitlePage({ title }: TitlePageProps) {
  return (
    <>
      <h1>TITLE PAGE COMPONENT</h1>
      <>{title}</>
    </>
  );
}
