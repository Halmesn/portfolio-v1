import * as styled from './navbarStyles';

import ThemeToggler from './ThemeToggler';

import { useViewport } from 'hooks/useViewport';

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
  const { width } = useViewport();

  const projectUrl = () => {
    if (isHome && width < 900) return '/project';
    else if (width > 900 && isHome) return '#';
    else return '/';
  };

  return (
    <styled.Navbar gridState={gridState} isHome={isHome}>
      <styled.NavList isHome={isHome}>
        <styled.LinkWrapper
          onClick={() => width > 900 && isHome && setGridState('open')}
          className="project"
        >
          <styled.NavLink href={projectUrl()} rotate="-2deg">
            <span>{isHome ? 'Project' : 'Home'}</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper>
          <styled.NavLink href="/about" rotate="1deg">
            <span>About</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper
          onClick={() => setChatBotState('open')}
          className="contact"
        >
          <styled.NavLink href="#" rotate="1deg">
            <span>Contact</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper className="logo">
          <styled.NavLink href="/">
            <styled.Logo
              src={`${
                theme === 'light'
                  ? '/images/brand/logo.svg'
                  : '/images/brand/logo-dark.svg'
              }`}
              alt="logo"
            />
          </styled.NavLink>
        </styled.LinkWrapper>
        {width > 850 && (
          <>
            <styled.LinkWrapper className="github">
              <styled.NavLink href="https://github.com/Halmesn">
                <styled.Icon
                  src={`${
                    theme === 'light'
                      ? '/icons/github.svg'
                      : '/icons/github-dark.svg'
                  }`}
                  alt="github icon"
                ></styled.Icon>
                <span>GitHub</span>
              </styled.NavLink>
            </styled.LinkWrapper>
            <styled.LinkWrapper>
              <styled.NavLink
                href="https://www.linkedin.com/in/adrian-li-332395208/"
                rotate="-1deg"
              >
                <styled.Icon
                  src={`${
                    theme === 'light'
                      ? '/icons/linkedin.svg'
                      : '/icons/linkedin-dark.svg'
                  }`}
                  alt="linkedin icon"
                ></styled.Icon>
                <span>LinkedIn</span>
              </styled.NavLink>
            </styled.LinkWrapper>
          </>
        )}
        {width && <ThemeToggler themeToggler={themeToggler} />}
      </styled.NavList>
    </styled.Navbar>
  );
}
