import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();
const environment = process.env.NODE_ENV;

app.use(express.json());
app.use(
  cors({
    origin: environment === 'PRODUCTION'
      ? process.env.BASE_URL_FRONTEND_PRODUCTION
      : process.env.BASE_URL_FRONTEND_DEVELOPMENT,
  }),
);

app.get('/blogs/:userId', (request, response) => {
  return response.json({
    message: 'Get blogs',
  });
});

app.post('/blogs/:userId', (request, response) => {
  return response.json({
    message: 'Post blogs',
  });
});

app.get('/certificates/:userId', (request, response) => {
  return response.json({
    message: 'Get certificates',
  });
});

app.post('/certificates/:userId', (request, response) => {
  return response.json({
    message: 'Post certificates',
  });
});

app.get('/certificateAreas', (request, response) => {
  return response.json({
    message: 'Get certificate areas',
  });
});

app.post('/certificateAreas', (request, response) => {
  return response.json({
    message: 'Post certificate areas',
  });
});

app.get('/certificateTypes', (request, response) => {
  return response.json({
    message: 'Get certificate types',
  });
});

app.post('/certificateTypes', (request, response) => {
  return response.json({
    message: 'Post certificate types',
  });
});

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

app.get('/profile/:userId', (request, response) => {
  return response.json({
    message: 'Get profile',
  });
});

app.post('/profile', (request, response) => {
  return response.json({
    message: 'Post profile',
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