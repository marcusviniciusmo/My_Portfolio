import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <BrowserRouter>
        <h1>My Portfolio</h1>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}
