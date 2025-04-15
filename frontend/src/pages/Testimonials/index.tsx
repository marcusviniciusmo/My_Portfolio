import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { TitlePage } from '../../components/TitlePage';
import Avatar from '../../assets/profile/profilePhoto.jpeg';
import * as Styles from './styles';

interface TestimonialType {
  id: string;
  image: string;
  quote: string;
  name: string;
  role: string;
}

const testimonialList: TestimonialType[] = [
  {
    id: '1',
    image: Avatar,
    quote: `“Matt was a real pleasure to work with and we look forward to 
      working with him again. He’s definitely the kind of designer you can trust 
      with a project from start to finish.”`,
    name: 'Pascal Tremblay',
    role: 'Creative Lead, Good Kind'
  },
  {
    id: '2',
    image: Avatar,
    quote: `“Matt was extremely professional and brought our vision to life. 
      Can't wait to collaborate again!”`,
    name: 'Pascal',
    role: 'Creative Lead'
  },
  {
    id: '3',
    image: Avatar,
    quote: `“Super communicative and very talented. Would recommend Matt 100%.”`,
    name: 'Sophie L.',
    role: 'Project Manager, Bloom Inc.'
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [titleArrowLeft, setTitleArrowLeft] = useState<string>('Previous');
  const [titleArrowRight, setTitleArrowRight] = useState<string>('Next');
  
  const activeTestimonial = testimonialList[activeIndex];

  useEffect(() => {
    setTitleArrowRight(
      activeIndex === testimonialList.length - 1 ? 'First' : 'Next'
    );
  }, [activeIndex])

  useEffect(() => {
    setTitleArrowLeft(
      activeIndex === 0 ? 'Last' : 'Previous'
    );
  })

  function handlePrevious() {
    setActiveIndex((prev) => 
    prev === 0 ? testimonialList.length - 1 : prev - 1);
  }

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % testimonialList.length);
  }

  function handleDotClick(index: number) {
    setActiveIndex(index);
  }

  return (
    <Styles.TestimonialsContainer>
      <TitlePage title="Testimonials" />
      <Styles.Text>
        People I've worked with have said some nice things...
      </Styles.Text>

      <Styles.Content>
        <Styles.ArrowButton onClick={handlePrevious}>
          <ChevronLeft className='arrow' titleAccess={titleArrowLeft} />
        </Styles.ArrowButton>

        <Styles.Testimonial>
          <Styles.Image src={activeTestimonial.image} />
          <Styles.Quote>{activeTestimonial.quote}</Styles.Quote>
          <Styles.Name>{activeTestimonial.name}</Styles.Name>
          <Styles.Role>{activeTestimonial.role}</Styles.Role>
        </Styles.Testimonial>

        <Styles.ArrowButton onClick={handleNext}>
          <ChevronRight className='arrow' titleAccess={titleArrowRight} />
        </Styles.ArrowButton>
      </Styles.Content>

      <Styles.Inputs>
        {
          testimonialList.map((_, index) => (
            <Styles.Dot
              key={index}
              active={index === activeIndex}
              onClick={() => handleDotClick(index)}
            />
          ))
        }
      </Styles.Inputs>
    </Styles.TestimonialsContainer>
  );
}
