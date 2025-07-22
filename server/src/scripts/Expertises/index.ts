const expertises = [
  {
    title: 'Languages I speak',
    text: `React, React Native, TypeScript, JavaScript, HTML, CSS, C#, SQL
      Server, Git`,
    icon: 'Translate',
  },
  {
    title: 'Web Development',
    text: `Creating responsive and dynamic websites using the latest
      technologies.`,
    icon: 'Code',
  },
  {
    title: 'App Development',
    text: `Developing intuitive and efficient mobile applications for Android
      and iOS.`,
    icon: 'MobileFriendly',
  },
  {
    title: 'Backend & Storage',
    text: `Implementing robust servers and secure, scalable storage solutions.`,
    icon: 'Storage',
  },
  {
    title: 'Agile Methodologies',
    text: `Utilizing agile methodologies to ensure quick and high-quality
      deliveries.`,
    icon: 'ViewKanban',
  },
  {
    title: 'Good Practices',
    text: `Adopting good programming practices to ensure clean, efficient, and
      sustainable code.`,
    icon: 'ThumbUpAltOutlined',
  },
];

export function GetExpertisesByUserToInsert(userId: string) {
  const expertisesByUserToInsert = expertises.map(expertiseByUser => ({
    ...expertiseByUser,
    user_ID: userId,
  }));

  return expertisesByUserToInsert;
}
