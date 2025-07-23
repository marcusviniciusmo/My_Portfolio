import { useEffect, useState } from 'react';
import { TitlePage } from '../../components/TitlePage';
import { ExpertiseType, icons, iconColors } from '../../@types/about.d';
import { getIndexMap, setBorderColor } from '../../utils/Functions';
import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export function About() {
  const [expertisesList, setExpertisesList] = useState<ExpertiseType[]>([]);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());

  const greetingsText = `Hi, I’m Marcus. Nice to meet you.`;
  const firstParagraph = `I'm Front-end Developer, from Brazil. Since 
    beginning my journey 8 years ago, I realized that I enjoy turning complex 
    problems into beautifully simple things, with code.`;
  const secondParagraph = `My aim is to bring across your message and identity 
    in the most creative way and adding value to you.`;

  useEffect(() => {
    const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
    const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

    fetch(`${baseUrlApi}/expertises/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setExpertisesList(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      });
  }, []);

  useEffect(() => {
    const map = getIndexMap(expertisesList);

    setIndexMap(map);
  }, [expertisesList]);

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  }

  return (
    <Styles.AboutContainer>
      <TitlePage title="About" />

      <Styles.Greetings>{greetingsText}</Styles.Greetings>

      <Styles.Text>
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
      </Styles.Text>

      <Styles.ExpertiseContainer>
        <Styles.ExpertiseTitle>What I do!</Styles.ExpertiseTitle>

        <Styles.ExpertiseCards>
          {expertisesList.map((expertise) => {
            const IconComponent = icons[expertise.icon];

            return (
              <Styles.ExpertiseCard
                key={expertise.id}
                color={iconColors[expertise.icon]}
                borderColor={getBorderColor(expertise.id)}
              >
                {IconComponent && (
                  <IconComponent fontSize="large" className="resumeIcon" />
                )}
                <Styles.CardTexts>
                  <Styles.CardTitle>{expertise.title}</Styles.CardTitle>
                  <Styles.CardText>{expertise.text}</Styles.CardText>
                </Styles.CardTexts>
              </Styles.ExpertiseCard>
            );
          })}
        </Styles.ExpertiseCards>
      </Styles.ExpertiseContainer>
    </Styles.AboutContainer>
  );
}
