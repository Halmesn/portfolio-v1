import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Navbar = styled.nav`
  padding-top: 0.6rem;
  z-index: 2;
  width: 100%;
  position: fixed;
  transition: opacity 1s;
  opacity: ${({ gridState }) => (gridState === 'open' ? '0' : '1')};
  pointer-events: ${({ gridState }) =>
    gridState === 'open' ? 'none' : 'auto'};
  background-color: ${({ theme }) => theme.primary};
  ${({ isHome }) =>
    isHome &&
    css`
      background-color: transparent;
    `}
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: 31.2em) {
    width: 95%;
  }

  .no-pd {
    padding: 0;

    span::after {
      display: none;
    }
  }

  .sm-left-pd {
    padding-left: 1rem;
  }

  .sm-right-pd {
    padding-right: 1rem;
  }

  .center {
    margin-left: auto;
    transform: translateX(-1vw);

    @media only screen and (max-width: 87.5em) {
      transform: translateX(0.8vw);
    }

    @media only screen and (max-width: 42.5em) {
      transform: translateX(-0.5vw);
    }

    @media only screen and (max-width: 28.4em) {
      transform: translateX(-1.6vw);
    }
  }

  .align-left {
    margin-left: auto;
  }
`;

const StyledLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const NavLink = styled(StyledLink)`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  padding: 2.5rem 3.5rem;

  @media only screen and (max-width: 42.5em) {
    padding: ${({ smPd }) => (smPd ? '2.5rem 1.5rem' : '1vw 1.5vw')};
  }

  @media only screen and (max-width: 28.5em) {
    padding: ${({ smPd }) => (smPd ? '2.5rem 1rem' : '0.5vw 1vw')};
  }

  span {
    position: relative;

    @media only screen and (max-width: 42.5em) {
      display: none;
    }
  }

  .about {
    @media only screen and (max-width: 42.5em) {
      display: initial;
    }
  }

  span::after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    opacity: 0;
    background-color: ${({ theme }) => theme.line};
    bottom: -1rem;
    left: 0;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    span::after {
      opacity: 1;
      transform: translateZ(0) scale3d(1.1, 1.1, 1.1)
        rotate(${({ rotate }) => rotate || '2deg'});
    }
  }
`;

export const Logo = styled.img`
  width: 3.5rem;
  height: 3.5rem;

  :hover {
    animation-name: buzz;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: 1;

    @keyframes buzz {
      10% {
        transform: translateX(3px) rotate(2deg);
      }
      20% {
        transform: translateX(-3px) rotate(-2deg);
      }
      30% {
        transform: translateX(3px) rotate(2deg);
      }
      40% {
        transform: translateX(-3px) rotate(-2deg);
      }
      50% {
        transform: translateX(2px) rotate(1deg);
      }
      60% {
        transform: translateX(-2px) rotate(-1deg);
      }
      70% {
        transform: translateX(2px) rotate(1deg);
      }
      80% {
        transform: translateX(-2px) rotate(-1deg);
      }
      90% {
        transform: translateX(1px) rotate(0);
      }
      100% {
        transform: translateX(-1px) rotate(0);
      }
    }
  }
`;

export const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;

  @media only screen and (max-width: 42.5em) {
    height: 1.8rem;
    width: 1.8rem;
  }

  @media only screen and (max-width: 28.4em) {
    transform: translate(1rem, -1px);
  }
`;
