import { ThemeProvider } from 'styled-components';
import { Home } from './screens/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
);
