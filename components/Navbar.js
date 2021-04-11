import {
  StyledNavbar,
  StyledNavList,
  StyledNavLink,
  StyledLogo,
  StyledIcon,
} from 'styles/NavbarStyle';
import NavList from './NavList';
import ThemeToggler from './ThemeToggler';

import { useState } from 'react';

export default function Navbar({ themeToggler, theme }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <StyledNavbar>
      <StyledNavList>
        <NavList setIsHover={setIsHover}>
          <StyledNavLink href="/#" className="sm-left-pd" rotate="-2deg">
            Work
          </StyledNavLink>
        </NavList>
        <NavList setIsHover={setIsHover}>
          <StyledNavLink href="/about" rotate="1deg">
            About
          </StyledNavLink>
        </NavList>
        <NavList setIsHover={setIsHover}>
          <StyledNavLink href="/#">Contact</StyledNavLink>
        </NavList>
        <NavList setIsHover={setIsHover} center>
          <StyledNavLink href="/" className="no-pd">
            <StyledLogo
              src={`${theme === 'light' ? 'logo.svg' : 'logo-dark.svg'}`}
              alt="logo"
              className={`${isHover ? 'buzz' : ''}`}
            />
          </StyledNavLink>
        </NavList>
        <NavList setIsHover={setIsHover} alignLeft>
          <StyledNavLink href="https://github.com/Halmesn" target="_blank">
            <StyledIcon
              src={`${
                theme === 'light' ? 'icons/github.svg' : 'icons/github-dark.svg'
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
            target="_blank"
            rotate="-1deg"
          >
            <StyledIcon
              src={`${
                theme === 'light'
                  ? 'icons/linkedin.svg'
                  : 'icons/linkedin-dark.svg'
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
