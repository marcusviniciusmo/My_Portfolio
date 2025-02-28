import { Download } from '@mui/icons-material';
import { DownloadCVContainer } from './styles';

export function DownloadCV() {
  const title = 'Download CV';

  return (
    <DownloadCVContainer title={title}>
      <Download fontSize="large" />
      Download CV
    </DownloadCVContainer>
  );
}
