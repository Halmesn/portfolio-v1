import styled from 'styled-components';
import Link from 'next/link';
import { navBtn } from 'styles/Mixins';

export const WorkButton = styled.button`
  ${navBtn}

  &:hover,
  &:focus-within {
    outline: none;
    ul {
      opacity: 1;
      transform: rotateX(0) translateX(-50%);
      visibility: visible;
    }

    span::after {
      opacity: 1;
      transform: translateZ(0) scale3d(1.1, 1.1, 1.1) rotate(-2deg);
    }

    .link ::after {
      transform: rotate(-1deg);
    }
  }
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 85%;
  left: calc(50% - 1.5rem);
  padding: 1rem 3.2rem 2.5rem;
  background-color: ${({ theme }) => theme.title};
  border-radius: 2rem;
  box-shadow: 0 4px 4px rgb(0 0 0 / 6%), 0 19px 20px rgb(0 0 0 / 15%);

  transform: rotateX(-90deg) translateX(-50%);
  transform-origin: top center;
  opacity: 0.3;
  transition: 280ms all 120ms ease-out;

  li {
    margin-top: 0.8rem;
  }
`;

const StyledLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>
      <span className="link">{children}</span>
    </a>
  </Link>
);

export const DropDownLink = styled(StyledLink)`
  background-color: transparent;
  color: ${({ theme }) => theme.dropdownText};
  display: block;
  padding: 1rem 0;

  &:hover {
    .link::after {
      transform: scale3d(1.2, 1.2, 1.2);
      background-color: ${({ theme }) => theme.dropdownLine};
    }
  }
`;
