import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Resume } from '../pages/Resume';
import { Projects } from '../pages/Projects';
import { Certificates } from '../pages/Certificates';
import { Testimonials } from '../pages/Testimonials';
import { Blogs } from '../pages/Blogs';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
