import { useEffect, useState } from 'react';
import {
  Translate,
  Code,
  MobileFriendly,
  Storage,
  ViewKanban,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { TitlePage } from '../../components/TitlePage';
import { getIndexMap, setBorderColor } from '../../utils/Functions';
import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export interface ExpertiseType {
  id: string;
  title: string;
  text: string;
  color: string;
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
}

export interface ExpertiseCardProps {
  color: string;
  borderColor: string;
}

export const ExpertisesList: ExpertiseType[] = [
  {
    id: '1',
    title: 'Languages I speak',
    text: `React, React Native, TypeScript, JavaScript, HTML, CSS, C#, SQL
      Server, Git`,
    color: '#D565FF',
    icon: Translate,
  },
  {
    id: '2',
    title: 'Web Development',
    text: `Creating responsive and dynamic websites using the latest
      technologies.`,
    color: '#FE75D8',
    icon: Code,
  },
  {
    id: '3',
    title: 'App Development',
    text: `Developing intuitive and efficient mobile applications for Android
      and iOS.`,
    color: '#259FFF',
    icon: MobileFriendly,
  },
  {
    id: '4',
    title: 'Backend & Storage',
    text: `Implementing robust servers and secure, scalable storage solutions.`,
    color: '#E6B85B',
    icon: Storage,
  },
  {
    id: '5',
    title: 'Agile Methodologies',
    text: `Utilizing agile methodologies to ensure quick and high-quality
      deliveries.`,
    color: '#FF6080',
    icon: ViewKanban,
  },
  {
    id: '6',
    title: 'Good Practices',
    text: `Adopting good programming practices to ensure clean, efficient, and
      sustainable code.`,
    color: '#8774FF',
    icon: ThumbUpAltOutlined,
  },
];

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
    setExpertisesList(ExpertisesList);
  }, []);

  useEffect(() => {
    const map = getIndexMap(ExpertisesList);

    setIndexMap(map);
  }, []);

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  };

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
          {
            expertisesList.map((expertise) => {
              return (
                <Styles.ExpertiseCard
                  key={expertise.id}
                  color={expertise.color}
                  borderColor={getBorderColor(expertise.id)}
                >
                  <expertise.icon fontSize='large' className='resumeIcon' />
                  <Styles.CardTexts>
                      <Styles.CardTitle>{expertise.title}</Styles.CardTitle>
                      <Styles.CardText>{expertise.text}</Styles.CardText>
                    </Styles.CardTexts>
                </Styles.ExpertiseCard>
              )
            })
          }
        </Styles.ExpertiseCards>
      </Styles.ExpertiseContainer>
    </Styles.AboutContainer>
  );
}
