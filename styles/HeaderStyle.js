import styled from 'styled-components';
import Link from 'next/link';

export const StyledHeader = styled.header`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const StyledDescription = styled.div`
  align-self: center;
  transform: translateY(-2rem);

  h1 {
    font-size: 7.2rem;
    line-height: 1.1;

    span {
      font-family: 'Bogart';
      font-weight: 500;
      display: block;
    }
  }

  p {
    font-size: 1.75rem;
    color: var(--grey);
    margin-top: 2.2rem;
    line-height: 1.7;
    span {
      display: block;
    }
  }
`;

export const StyledNavbar = styled.nav`
  padding-top: 0.6rem;
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;

  .center {
    position: absolute;
    left: 50%;
    transform: translate(-80%, 0);
    padding: 0;
  }

  .align-left {
    margin-left: auto;
  }

  .sm-left-pd {
    padding-left: 1rem;
  }

  .sm-right-pd {
    padding-right: 1rem;
  }

  .work {
    &:hover {
      span::after {
        transform: translateZ(0) scale3d(1.1, 1.1, 1.1) rotate(-2deg);
      }
    }
  }

  .about {
    &:hover {
      span::after {
        transform: translateZ(0) scale3d(1.1, 1.1, 1.1) rotate(1deg);
      }
    }
  }

  .linkedin {
    &:hover {
      span::after {
        transform: translateZ(0) scale3d(1.1, 1.1, 1.1) rotate(-2deg);
      }
    }
  }
`;

export const StyledLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;

  &:hover {
    animation-name: buzz;
    animation-duration: 0.75s;
    animation-iteration-count: 1;
  }

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
`;

const StyledLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>
      <span>{children}</span>
    </a>
  </Link>
);

export const StyledNavLink = styled(StyledLink)`
  color: var(--black);
  font-size: 1.75rem;
  display: block;
  padding: 2.5rem 3.5rem;

  span {
    position: relative;
  }

  span::after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    opacity: 0;
    background-color: var(--pink);
    bottom: -1rem;
    left: 0;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    span::after {
      opacity: 1;
      transform: translateZ(0) scale3d(1.1, 1.1, 1.1) rotate(2deg);
    }
  }

  .fab {
    margin-right: 0.5rem;
    transform: translateY(0.8px);
  }
`;
