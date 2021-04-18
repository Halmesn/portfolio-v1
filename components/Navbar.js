import {
  StyledNavbar,
  StyledNavList,
  StyledNavLink,
  StyledLogo,
  StyledIcon,
} from 'styles/NavbarStyle';

import WorkButton from './WorkButton';
import ContactButton from './ContactButton';
import ThemeToggler from './ThemeToggler';

import { useRouter } from 'next/router';

export default function Navbar({
  themeToggler,
  theme,
  gridState,
  setChatBotState,
}) {
  const router = useRouter();
  const url = router.pathname;
  const isHome = url === '/' ? true : false;

  return (
    <StyledNavbar gridState={gridState} isHome={isHome}>
      <StyledNavList>
        <li>
          <WorkButton>Work</WorkButton>
        </li>
        <li>
          <StyledNavLink href="/about" rotate="1deg">
            <span className="about">About</span>
          </StyledNavLink>
        </li>
        <li>
          <ContactButton setChatBotState={setChatBotState}>
            Contact
          </ContactButton>
        </li>
        <li className="center">
          <StyledNavLink href="/" className="no-pd">
            <StyledLogo
              src={`${theme === 'light' ? '/logo.svg' : '/logo-dark.svg'}`}
              alt="logo"
            />
          </StyledNavLink>
        </li>
        <li className="align-left">
          <StyledNavLink href="https://github.com/Halmesn" smPd>
            <StyledIcon
              src={`${
                theme === 'light'
                  ? '/icons/github.svg'
                  : '/icons/github-dark.svg'
              }`}
              alt="github icon"
            ></StyledIcon>
            <span>GitHub</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="https://www.linkedin.com/in/adrian-li-332395208/"
            rotate="-1deg"
            smPd
          >
            <StyledIcon
              src={`${
                theme === 'light'
                  ? '/icons/linkedin.svg'
                  : '/icons/linkedin-dark.svg'
              }`}
              alt="linkedin icon"
            ></StyledIcon>
            <span>LinkedIn</span>
          </StyledNavLink>
        </li>
        <ThemeToggler themeToggler={themeToggler} />
      </StyledNavList>
    </StyledNavbar>
  );
}
