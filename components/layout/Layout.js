import Navbar from 'components/Navbar';
import Birds from 'components/Birds';

import { useRouter } from 'next/router';
import { useDarkMode } from 'hooks/useDarkMode';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Themes';

export default function Layout({ children }) {
  const router = useRouter();
  const url = router.pathname;

  const [theme, themeToggler] = useDarkMode();

  return url === '/' ? (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Birds theme={theme}>
        <Navbar themeToggler={themeToggler} theme={theme} />
        {children}
      </Birds>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar themeToggler={themeToggler} theme={theme} />
      {children}
    </ThemeProvider>
  );
}
