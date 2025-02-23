import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}
