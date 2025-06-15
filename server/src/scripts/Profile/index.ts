const profile = {
  name: 'Marcus Oliveira',
  role: 'Front-End Developer',
  curriculum: '',
  image: '',
};

export function GetProfileToInsert() {
  const profileToInsert = profile;

  const slug = profileToInsert.name.replace(/ /g, '_');
  const imagePath = `uploads/profile/${slug}_Profile_Photo.jpeg`;
  const curriculumPath = `uploads/curriculum/CV_${slug}.pdf`;

  profileToInsert.image = imagePath;
  profileToInsert.curriculum = curriculumPath;

  return profileToInsert;
}
