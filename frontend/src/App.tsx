import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeContextProvider>
  );
}
