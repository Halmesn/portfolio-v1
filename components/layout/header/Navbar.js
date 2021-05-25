import * as Styled from 'components/layout/header/NavbarStyle';

import WorkButton from 'components/layout/header/WorkButton';
import ContactButton from 'components/layout/header/ContactButton';
import ThemeToggler from 'components/layout/header/ThemeToggler';

import { useRouter } from 'next/router';

export default function Navbar({
  themeToggler,
  theme,
  gridState,
  setGridState,
  setChatBotState,
}) {
  const router = useRouter();
  const url = router.pathname;
  const isHome = url === '/' ? true : false;

  return (
    <Styled.Navbar gridState={gridState} isHome={isHome}>
      <Styled.NavList isHome={isHome}>
        <li>
          <WorkButton setGridState={setGridState}>Work</WorkButton>
        </li>
        <li>
          <Styled.NavLink href="/about" rotate="1deg">
            <span className="about">About</span>
          </Styled.NavLink>
        </li>
        <li>
          <ContactButton setChatBotState={setChatBotState}>
            Contact
          </ContactButton>
        </li>
        <li className="center">
          <Styled.NavLink href="/" className="no-pd">
            <Styled.Logo
              src={`${
                theme === 'light'
                  ? '/images/brand/logo.svg'
                  : '/images/brand/logo-dark.svg'
              }`}
              alt="logo"
            />
          </Styled.NavLink>
        </li>
        <li className="align-left">
          <Styled.NavLink href="https://github.com/Halmesn" smPd>
            <Styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/github.svg'
                  : '/icons/github-dark.svg'
              }`}
              alt="github icon"
            ></Styled.Icon>
            <span>GitHub</span>
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink
            href="https://www.linkedin.com/in/adrian-li-332395208/"
            rotate="-1deg"
            smPd
          >
            <Styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/linkedin.svg'
                  : '/icons/linkedin-dark.svg'
              }`}
              alt="linkedin icon"
            ></Styled.Icon>
            <span>LinkedIn</span>
          </Styled.NavLink>
        </li>
        <ThemeToggler themeToggler={themeToggler} />
      </Styled.NavList>
    </Styled.Navbar>
  );
}
