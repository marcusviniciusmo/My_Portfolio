import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';

export function Menu() {
  return (
    <>
      <h1>MENU COMPONENT</h1>
      <NavLink to={routes.home}>home</NavLink>
      <NavLink to={routes.about}>about</NavLink>
      <NavLink to={routes.resume}>resume</NavLink>
      <NavLink to={routes.projects}>projects</NavLink>
      <NavLink to={routes.certificates}>certificates</NavLink>
      <NavLink to={routes.testimonials}>testimonials</NavLink>
      <NavLink to={routes.blogs}>blogs</NavLink>
      <NavLink to={routes.contact}>contact</NavLink>
    </>
  );
}
