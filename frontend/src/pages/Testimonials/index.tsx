import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { TitlePage } from '../../components/TitlePage';
import { TestimonialsData } from '../../data/Testimonials';
import * as Styles from './styles';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [titleArrowLeft, setTitleArrowLeft] = useState<string>('Previous');
  const [titleArrowRight, setTitleArrowRight] = useState<string>('Next');

  const activeTestimonial = TestimonialsData[activeIndex];

  useEffect(() => {
    setTitleArrowRight(
      activeIndex === TestimonialsData.length - 1 ? 'First' : 'Next'
    );
  }, [activeIndex])

  useEffect(() => {
    setTitleArrowLeft(
      activeIndex === 0 ? 'Last' : 'Previous'
    );
  })

  function handlePrevious() {
    setActiveIndex((prev) =>
      prev === 0 ? TestimonialsData.length - 1 : prev - 1);
  }

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % TestimonialsData.length);
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

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          >
            <Styles.Testimonial>
              <Styles.Image src={activeTestimonial.image} />
              <Styles.Quote>{activeTestimonial.quote}</Styles.Quote>
              <Styles.Name>{activeTestimonial.name}</Styles.Name>
              <Styles.Role>{activeTestimonial.role}</Styles.Role>
            </Styles.Testimonial>
          </motion.div>
        </AnimatePresence>

        <Styles.ArrowButton onClick={handleNext}>
          <ChevronRight className='arrow' titleAccess={titleArrowRight} />
        </Styles.ArrowButton>
      </Styles.Content>

      <Styles.Inputs>
        {
          TestimonialsData.map((_, index) => (
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
