import styled from 'styled-components';
import Link from 'next/link';

export const StyledNavbar = styled.nav`
  padding-top: 0.6rem;
  z-index: 2;
  width: 100%;
  position: fixed;
  transition: opacity 1s;
  opacity: ${(props) => (props.gridState === 'open' ? '0' : '1')};
  pointer-events: ${(props) => (props.gridState === 'open' ? 'none' : 'auto')};
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: 90%;
  margin: 0 auto;

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
    transform: translateX(-2vw);
  }

  .align-left {
    margin-left: auto;
  }
`;

const StyledLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>
      <span>{children}</span>
    </a>
  </Link>
);

export const StyledNavLink = styled(StyledLink)`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.75rem;
  display: block;
  padding: 2.5rem 3.5rem;

  span {
    position: relative;
    display: flex;
    align-items: center;
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
        rotate(${(props) => props.rotate || '2deg'});
    }
  }
`;

export const StyledLogo = styled.img`
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

export const StyledIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
`;
