const networks = [
  {
    icon: 'LinkedIn',
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/marcus-viniciusmo/',
  },
  {
    icon: 'GitHub',
    title: 'GitHub',
    link: 'https://github.com/marcusviniciusmo',
  },
  {
    icon: 'WhatsApp',
    title: 'WhatsApp',
    link: 'https://wa.me/3530832084998',
  },
  {
    icon: 'Instagram',
    title: 'Instagram',
    link: 'https://www.instagram.com/projit.world/',
  },
  {
    icon: 'Email',
    title: 'Email',
    link: 'mailto:marcus.viniciusmo@hotmail.com',
  },
];

export function GetNetworksByUserToInsert(userId: string) {
  const networksByUserToInsert = networks.map(network => ({
    ...network,
    user_ID: userId,
  }));

  return networksByUserToInsert;
}
