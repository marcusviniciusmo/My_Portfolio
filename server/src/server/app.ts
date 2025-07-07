import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { RestrictWriteRoute } from '../utils/Functions';

import { GetBlogsByUserRoute, CreateBlogsByUserRoute } from '../routes/Blogs';
import {
  GetCertificateAreasRoute,
  CreateCertificateAreasRoute,
} from '../routes/CertificateAreas';
import {
  GetCertificateTypesRoute,
  CreateCertificateTypesRoute,
} from '../routes/CertificateTypes';
import {
  GetCertificatesByUserRoute,
  CreateCertificatesByUserRoute,
} from '../routes/Certificates';
import { GenerateJwtTokenRoute } from '../routes/Jwt';
import { GetProfileByIdRoute, CreateProfileRoute } from '../routes/Profile';

dotenv.config();

export const app = express();
const environment = process.env.NODE_ENV;

app.use(express.json());
app.use(
  cors({
    origin:
      environment === 'PRODUCTION'
        ? process.env.BASE_URL_FRONTEND_PRODUCTION
        : process.env.BASE_URL_FRONTEND_DEVELOPMENT,
  }),
);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(RestrictWriteRoute);

/* BLOGS */
app.use(GetBlogsByUserRoute);
app.use(CreateBlogsByUserRoute);
/* CERTIFICATE AREAS */
app.use(GetCertificateAreasRoute);
app.use(CreateCertificateAreasRoute);
/* CERTIFICATE TYPES */
app.use(GetCertificateTypesRoute);
app.use(CreateCertificateTypesRoute);
/* CERTIFICATES */
app.use(GetCertificatesByUserRoute);
app.use(CreateCertificatesByUserRoute);
/* JWT */
app.use(GenerateJwtTokenRoute);
/* PROFILE */
app.use(GetProfileByIdRoute);
app.use(CreateProfileRoute);

app.get('/education/:userId', (request, response) => {
  return response.json({
    message: 'Get education',
  });
});

app.post('/education/:userId', (request, response) => {
  return response.json({
    message: 'Post education',
  });
});

app.get('/experiences/:userId', (request, response) => {
  return response.json({
    message: 'Get experiences',
  });
});

app.post('/experiences/:userId', (request, response) => {
  return response.json({
    message: 'Post experiences',
  });
});

app.get('/expertises/:userId', (request, response) => {
  return response.json({
    message: 'Get expertises',
  });
});

app.post('/expertises/:userId', (request, response) => {
  return response.json({
    message: 'Post expertises',
  });
});

app.get('/knowledges/:userId', (request, response) => {
  return response.json({
    message: 'Get knowledges',
  });
});

app.post('/knowledges/:userId', (request, response) => {
  return response.json({
    message: 'Post knowledges',
  });
});

app.get('/menuItems/:userId', (request, response) => {
  return response.json({
    message: 'Get menu items',
  });
});

app.post('/menuItems/:userId', (request, response) => {
  return response.json({
    message: 'Post menu items',
  });
});

app.get('/networks/:userId', (request, response) => {
  return response.json({
    message: 'Get networks',
  });
});

app.post('/networks/:userId', (request, response) => {
  return response.json({
    message: 'Post networks',
  });
});

app.get('/profileInfo/:userId', (request, response) => {
  return response.json({
    message: 'Get profile info',
  });
});

app.post('/profileInfo/:userId', (request, response) => {
  return response.json({
    message: 'Post profile info',
  });
});

app.get('/projects/:userId', (request, response) => {
  return response.json({
    message: 'Get projects',
  });
});

app.post('/projects/:userId', (request, response) => {
  return response.json({
    message: 'Post projects',
  });
});

app.get('/testimonials/:userId', (request, response) => {
  return response.json({
    message: 'Get testimonials',
  });
});

app.post('/testimonials/:userId', (request, response) => {
  return response.json({
    message: 'Post testimonials',
  });
});

app.get('/workingSkills/:userId', (request, response) => {
  return response.json({
    message: 'Get working skills',
  });
});

app.post('/workingSkills/:userId', (request, response) => {
  return response.json({
    message: 'Post working skills',
  });
});
