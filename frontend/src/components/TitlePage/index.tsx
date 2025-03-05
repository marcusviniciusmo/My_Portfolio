import { Title } from './styles';

interface TitlePageProps {
  title: string;
}

export function TitlePage({ title }: TitlePageProps) {
  return <Title>{title}</Title>;
}
