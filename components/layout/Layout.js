import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Themes';

import Navbar from 'components/layout/Navbar';
import { Birds } from 'components/Birds';
import Footer from 'components/layout/Footer';
import Grid from 'components/layout/Grid';

import { useDarkMode } from 'hooks/useDarkMode';

import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const ChatBotContext = React.createContext();

export default function Layout({ children }) {
  const router = useRouter();
  const url = router.pathname;

  const [theme, themeToggler] = useDarkMode();
  const [gridState, setGridState] = useState('close');
  const [chatBotState, setChatBotState] = useState('close');

  return (
    <ChatBotContext.Provider value={setChatBotState}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {url === '/' ? <Birds theme={theme} /> : null}
        <header style={{ zIndex: 2 }}>
          <Navbar
            theme={theme}
            themeToggler={themeToggler}
            gridState={gridState}
            setGridState={setGridState}
            setChatBotState={setChatBotState}
          />
        </header>
        <main style={{ zIndex: 1, height: '100vh', display: 'grid' }}>
          {children}
          <Grid
            gridState={gridState}
            setGridState={setGridState}
            chatBotState={chatBotState}
          />
        </main>
        <Footer
          theme={theme}
          gridState={gridState}
          setGridState={setGridState}
          chatBotState={chatBotState}
          setChatBotState={setChatBotState}
        />
      </ThemeProvider>
    </ChatBotContext.Provider>
  );
}
