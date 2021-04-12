import Navbar from 'components/Navbar';
import Birds from 'components/Birds';
import Footer from 'components/Footer';

import { useRouter } from 'next/router';
import { useDarkMode } from 'hooks/useDarkMode';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Themes';

export default function Layout({ children }) {
  const router = useRouter();
  const url = router.pathname;

  const [theme, themeToggler] = useDarkMode();

  const gridToggler = () => {};
  const chatToggler = () => {};

  return url === '/' ? (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Birds theme={theme}>
        <header style={{ zIndex: 2 }}>
          <Navbar themeToggler={themeToggler} theme={theme} />
        </header>
        <main style={{ zIndex: 1 }}>{children}</main>
        <Footer
          gridToggler={gridToggler}
          chatToggler={chatToggler}
          theme={theme}
        />
      </Birds>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <header style={{ zIndex: 2 }}>
        <Navbar themeToggler={themeToggler} theme={theme} />
      </header>
      <main style={{ zIndex: 1 }}>{children}</main>
      <Footer
        gridToggler={gridToggler}
        chatToggler={chatToggler}
        theme={theme}
      />
    </ThemeProvider>
  );
}
