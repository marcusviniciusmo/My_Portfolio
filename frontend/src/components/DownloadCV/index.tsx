import { useRef, useState } from 'react';
import { Download } from '@mui/icons-material';
import { DownloadCVContainer, File } from './styles';

export function DownloadCV() {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const title = 'Download CV';

  function downloadCV() {
    if (!linkRef.current) return;

    setIsDownloading(true);
    linkRef.current.click();

    setTimeout(() => setIsDownloading(false), 1000);
  }

  return (
    <div>
      <File
        ref={linkRef}
        href="/curriculum/CV_Marcus_Oliveira.pdf"
        download="CV_Marcus_Oliveira.pdf"
      />
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
