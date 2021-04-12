import styled from 'styled-components';
import Link from 'next/link';

export const StyledWorkButton = styled.button`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.75rem;
  display: block;
  padding: 2.5rem 3.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  span {
    position: relative;
    display: flex;
    align-items: center;

    ::after {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      opacity: 0;
      background-color: ${({ theme }) => theme.dropdownLine};
      bottom: -1rem;
      left: 0;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

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

export const StyledDropdownMenu = styled.ul`
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

export const StyledDropDownLink = styled(StyledLink)`
  background-color: transparent;
  color: ${({ theme }) => theme.dropdownText};
  display: block;
  padding: 1rem 0;

  &:hover {
    .link::after {
      transform: scale3d(1.2, 1.2, 1.2);
    }
  }
`;
