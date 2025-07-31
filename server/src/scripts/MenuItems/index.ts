const menuItems = [
  {
    label: 'About',
    to: '/about',
    icon: 'PermIdentity',
  },
  {
    label: 'Resume',
    to: '/resume',
    icon: 'Receipt',
  },
  {
    label: 'Projects',
    to: '/projects',
    icon: 'Devices',
  },
  {
    label: 'Certificates',
    to: '/certificates',
    icon: 'CardMembership',
  },
  {
    label: 'Testimonials',
    to: '/testimonials',
    icon: 'FormatQuote',
  },
  {
    label: 'Blogs',
    to: '/blogs',
    icon: 'AutoStories',
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'Call',
  },
];

export function GetMenuItemsByUserToInsert(userId: string) {
  const menuItemsByUserToInsert = menuItems.map(menuItem => ({
    ...menuItem,
    user_ID: userId,
  }));

  return menuItemsByUserToInsert;
}
