const education = [
  {
    periodStart: new Date(2016, 0),
    periodEnd: new Date(2020, 0),
    title: 'Information Systems',
    institution: 'Unifametro, Fortaleza, Brazil',
  },
];

export function GetEducationByUserToInsert(userId: string) {
  const educationByUserToInsert = education.map(educationByUser => ({
    ...educationByUser,
    user_ID: userId,
  }));

  return educationByUserToInsert;
}
