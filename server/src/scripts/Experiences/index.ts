const experiences = [
  {
    periodStart: new Date(2025, 4),
    periodEnd: new Date(),
    title: 'Care Staff - Day Services',
    institution: 'Stewarts Care',
  },
  {
    periodStart: new Date(2023, 9),
    periodEnd: new Date(2025, 4),
    title: 'Senior Healthcare Assistant',
    institution: 'TLC Carton',
  },
  {
    periodStart: new Date(2023, 1),
    periodEnd: new Date(2023, 10),
    title: 'Healthcare Assistant',
    institution: 'TLC Carton',
  },
  {
    periodStart: new Date(2022, 3),
    periodEnd: new Date(2022, 8),
    title: 'Healthcare Assistant',
    institution: 'All In Care',
  },
  {
    periodStart: new Date(2020, 1),
    periodEnd: new Date(2021, 4),
    title: 'Web Developer',
    institution: 'Farmacias Pague Menos',
  },
  {
    periodStart: new Date(2019, 3),
    periodEnd: new Date(2020, 1),
    title: 'Software Tester',
    institution: 'Farmacias Pague Menos',
  },
  {
    periodStart: new Date(2014, 11),
    periodEnd: new Date(2018, 11),
    title: 'Sub Manager',
    institution: 'Companhia do Saldo',
  },
  {
    periodStart: new Date(2012, 5),
    periodEnd: new Date(2014, 11),
    title: 'Seller',
    institution: 'Companhia do Saldo',
  },
];

export function GetExperiencesByUserToInsert(userId: string) {
  const experiencesByUserToInsert = experiences.map(experience => ({
    ...experience,
    user_ID: userId,
  }));

  return experiencesByUserToInsert;
}
