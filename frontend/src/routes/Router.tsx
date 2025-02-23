import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
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
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.resume} element={<Resume />} />
      <Route path={routes.projects} element={<Projects />} />
      <Route path={routes.certificates} element={<Certificates />} />
      <Route path={routes.testimonials} element={<Testimonials />} />
      <Route path={routes.blogs} element={<Blogs />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}
