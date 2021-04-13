import Navbar from 'components/Navbar';
import Birds from 'components/Birds';
import Footer from 'components/Footer';
import Grid from 'components/Grid';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDarkMode } from 'hooks/useDarkMode';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Themes';

export default function Layout({ children }) {
  const router = useRouter();
  const url = router.pathname;

  const [theme, themeToggler] = useDarkMode();
  const [gridState, setGridState] = useState('close');

  useEffect(() => {
    setGridState('close');
  }, [url]);

  return url === '/' ? (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Birds theme={theme}>
        <header style={{ zIndex: 2 }}>
          <Navbar
            themeToggler={themeToggler}
            theme={theme}
            gridState={gridState}
          />
        </header>
        <main style={{ zIndex: 1 }}>
          {children}
          <Grid gridState={gridState} setGridState={setGridState} />
        </main>
        <Footer
          theme={theme}
          setGridState={setGridState}
          gridState={gridState}
        />
      </Birds>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <header style={{ zIndex: 2 }}>
        <Navbar themeToggler={themeToggler} theme={theme} />
      </header>
      <main style={{ zIndex: 1 }}>
        {children}
        <Grid gridState={gridState} setGridState={setGridState} />
      </main>
      <Footer theme={theme} setGridState={setGridState} />
    </ThemeProvider>
  );
}
