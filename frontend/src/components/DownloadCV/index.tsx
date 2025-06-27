import { useState } from 'react';
import { Download } from '@mui/icons-material';
import { DownloadCVProps } from '../../@types/downloadCV';
import { DownloadCVContainer } from './styles';

export function DownloadCV({ name, curriculum }: DownloadCVProps) {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
  const userName = `${name.replace(/ /g, '_')}`;
  const file = `CV_${userName}.pdf`;
  const title = 'Download CV';

  async function downloadCV() {
    setIsDownloading(true);

    try {
      const response = await fetch(`${baseUrlApi}/${curriculum}`);

      if (!response) {
        throw new Error(`Error to download the file.`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = url;
      a.download = file;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`Error to download the CV.`, error);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  }

  return (
    <div>
      <DownloadCVContainer
        aria-label="Download CV"
        title={title}
        onClick={downloadCV}
      >
        <Download fontSize="large" />
        {isDownloading ? 'Downloading...' : 'Download CV'}
      </DownloadCVContainer>
    </div>
  );
}
