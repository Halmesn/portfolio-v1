import {
  StyledNavbar,
  StyledNavList,
  StyledNavLink,
  StyledLogo,
} from 'styles/HeaderStyle';

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavList>
        <StyledNavLink href="#" className="sm-left-pd work">
          Work
        </StyledNavLink>
        <StyledNavLink href="/about" className="about">
          About
        </StyledNavLink>
        <StyledNavLink href="#">Contact</StyledNavLink>
        <StyledNavLink href="/" className="center sm-pd">
          <StyledLogo src="logo.svg" alt="logo" className="logo " />
        </StyledNavLink>
        <StyledNavLink
          href="https://github.com/Halmesn"
          className="align-left"
          target="_blank"
        >
          <i className="fab fa-github-alt"></i>GitHub
        </StyledNavLink>
        <StyledNavLink
          href="https://www.linkedin.com/in/adrian-li-332395208/"
          target="_blank"
          className="linkedin sm-right-pd"
        >
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </StyledNavLink>
      </StyledNavList>
    </StyledNavbar>
  );
}
