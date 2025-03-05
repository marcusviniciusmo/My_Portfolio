import { TitlePageProps } from '../../@types/titlePage';
import { Title } from './styles';

export function TitlePage({ title }: TitlePageProps) {
  return <Title>{title}</Title>;
}
