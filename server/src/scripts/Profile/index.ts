const profile = {
  name: 'Marcus Oliveira',
  role: 'Front-End Developer',
  curriculum: '',
  image: '',
};

export function GetProfileToInsert() {
  const profileToInsert = profile;

  const userName = profileToInsert.name.replace(/ /g, '_');
  const imagePath = `uploads/profile/${userName}_Profile_Photo.jpeg`;
  const curriculumPath = `uploads/curriculum/CV_${userName}.pdf`;

  profileToInsert.image = imagePath;
  profileToInsert.curriculum = curriculumPath;

  return profileToInsert;
}
