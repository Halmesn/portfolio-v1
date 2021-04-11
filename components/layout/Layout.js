import Navbar from 'components/Navbar';
import Birds from 'components/Birds';

import { useRouter } from 'next/router';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Themes';

export default function Layout({ children }) {
  const router = useRouter();
  const url = router.pathname;

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

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
