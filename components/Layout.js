import Navbar from 'components/Navbar';
import { Birds } from 'components/Birds';
import Footer from 'components/Footer';
import Grid from 'components/Grid';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDarkMode } from 'hooks/useDarkMode';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Themes';

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
            themeToggler={themeToggler}
            theme={theme}
            gridState={gridState}
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
          setGridState={setGridState}
          gridState={gridState}
          chatBotState={chatBotState}
          setChatBotState={setChatBotState}
        />
      </ThemeProvider>
    </ChatBotContext.Provider>
  );
}
