import {
  StyledNavbar,
  StyledNavList,
  StyledNavLink,
  StyledLogo,
  StyledIcon,
} from 'styles/NavbarStyle';
import NavList from './NavList';
import WorkButton from './WorkButton';
import ContactButton from './ContactButton';
import ThemeToggler from './ThemeToggler';

import { useState } from 'react';

export default function Navbar({ themeToggler, theme }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <StyledNavbar>
      <StyledNavList>
        <NavList setIsHover={setIsHover}>
          <WorkButton>Work</WorkButton>
        </NavList>
        <NavList setIsHover={setIsHover}>
          <StyledNavLink href="/about" rotate="1deg">
            About
          </StyledNavLink>
        </NavList>
        <NavList setIsHover={setIsHover}>
          <ContactButton>Contact</ContactButton>
        </NavList>
        <NavList setIsHover={setIsHover} center>
          <StyledNavLink href="/" className="no-pd">
            <StyledLogo
              src={`${theme === 'light' ? '/logo.svg' : '/logo-dark.svg'}`}
              alt="logo"
              className={`${isHover ? 'buzz' : ''}`}
            />
          </StyledNavLink>
        </NavList>
        <NavList setIsHover={setIsHover} alignLeft>
          <StyledNavLink href="https://github.com/Halmesn">
            <StyledIcon
              src={`${
                theme === 'light'
                  ? '/icons/github.svg'
                  : '/icons/github-dark.svg'
              }`}
              alt="github icon"
              className="icon"
            ></StyledIcon>
            GitHub
          </StyledNavLink>
        </NavList>
        <NavList setIsHover={setIsHover}>
          <StyledNavLink
            href="https://www.linkedin.com/in/adrian-li-332395208/"
            rotate="-1deg"
          >
            <StyledIcon
              src={`${
                theme === 'light'
                  ? '/icons/linkedin.svg'
                  : '/icons/linkedin-dark.svg'
              }`}
              alt="linkedin icon"
              className="icon"
            ></StyledIcon>
            LinkedIn
          </StyledNavLink>
        </NavList>
        <ThemeToggler themeToggler={themeToggler} />
      </StyledNavList>
    </StyledNavbar>
  );
}
