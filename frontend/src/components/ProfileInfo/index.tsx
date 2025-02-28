import {
  Smartphone,
  Email,
  LocationOn,
  CalendarMonth,
} from '@mui/icons-material';
import {
  ProfileInfoContainer,
  Content,
  Icon,
  Info,
  Label,
  Data,
} from './styles';

export function ProfileInfo() {
  return (
    <ProfileInfoContainer>
      <Content>
        <Icon profileInfoIconName="SMARTPHONE">
          <Smartphone fontSize="large" />
        </Icon>
        <Info>
          <Label>Phone</Label>
          <Data>
            <a
              href="https://wa.me/3530832084998"
              target="_blank"
              rel="noreferrer"
            >
              +353 083 208 4998
            </a>
          </Data>
        </Info>
      </Content>

      <Content>
        <Icon profileInfoIconName="EMAIL">
          <Email fontSize="large" />
        </Icon>
        <Info>
          <Label>Email</Label>
          <Data>
            <a
              href="mailto:marcus.viniciusmo@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              marcus.viniciusmo@hotmail.com
            </a>
          </Data>
        </Info>
      </Content>

      <Content>
        <Icon profileInfoIconName="LOCATION">
          <LocationOn fontSize="large" />
        </Icon>
        <Info>
          <Label>Location</Label>
          <Data>Dublin, Ireland</Data>
        </Info>
      </Content>

      <Content>
        <Icon profileInfoIconName="BIRTHDAY">
          <CalendarMonth fontSize="large" />
        </Icon>
        <Info>
          <Label>Birthday</Label>
          <Data>December 28, 1984</Data>
        </Info>
      </Content>
    </ProfileInfoContainer>
  );
}
