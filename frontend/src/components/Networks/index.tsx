import {
  LinkedIn,
  GitHub,
  WhatsApp,
  Instagram,
  Email,
} from '@mui/icons-material';
import { NetworksNames } from '../../enums/Networks';
import { NetworksContainer, Icon } from './styles';

export function Networks() {
  return (
    <NetworksContainer>
      <a
        href="https://www.linkedin.com/in/marcus-viniciusmo/"
        target="_blank"
        rel="noreferrer"
        title="Linkedin"
      >
        <Icon networkIconName={NetworksNames.LINKEDIN}>
          <LinkedIn fontSize="large" />
        </Icon>
      </a>

      <a
        href="https://github.com/marcusviniciusmo"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <Icon networkIconName={NetworksNames.GITHUB}>
          <GitHub fontSize="large" />
        </Icon>
      </a>

      <a
        href="https://wa.me/3530832084998"
        target="_blank"
        rel="noreferrer"
        title="WhatsApp"
      >
        <Icon networkIconName={NetworksNames.WHATSAPP}>
          <WhatsApp fontSize="large" />
        </Icon>
      </a>

      <a
        href="https://www.instagram.com/projit.world/"
        target="_blank"
        rel="noreferrer"
        title="Instagram"
      >
        <Icon networkIconName={NetworksNames.INSTAGRAM}>
          <Instagram fontSize="large" />
        </Icon>
      </a>

      <a
        href="mailto:marcus.viniciusmo@hotmail.com"
        target="_blank"
        rel="noreferrer"
        title="Email"
      >
        <Icon networkIconName={NetworksNames.EMAIL}>
          <Email fontSize="large" />
        </Icon>
      </a>
    </NetworksContainer>
  );
}
