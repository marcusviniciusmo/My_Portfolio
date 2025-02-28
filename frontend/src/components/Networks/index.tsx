import { useEffect, useState } from 'react';
import { NetworksType } from '../../@types/networks';
import { NetworksData } from '../../data/Networks';
import { NetworksContainer, Icon } from './styles';

export function Networks() {
  const [networksData, setNetworksData] = useState<NetworksType[]>([]);

  useEffect(() => {
    setNetworksData(NetworksData);
  }, []);

  return (
    <NetworksContainer>
      {networksData.map((network) => {
        const IconElement = network.icon;

        return (
          <a
            key={network.networkId}
            href={network.link.href}
            target={network.link.target}
            rel={network.link.rel}
            title={network.title}
          >
            <Icon networkIconName={network.name}>
              <IconElement fontSize="large" />
            </Icon>
          </a>
        );
      })}
    </NetworksContainer>
  );
}
