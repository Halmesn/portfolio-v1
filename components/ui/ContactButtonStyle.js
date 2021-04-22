import styled from 'styled-components';

export const ContactButton = styled.button`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.75rem;
  display: block;
  padding: 2.5rem 3.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  @media only screen and (max-width: 25em) {
    display: none;
  }

  @media only screen and (max-width: 42.5em) {
    padding: 2.5rem 1.5vw;
  }

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
      background-color: ${({ theme }) => theme.line};
      bottom: -1rem;
      left: 0;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

  &:hover {
    span::after {
      opacity: 1;
      transform: translateZ(0) scale3d(1.1, 1.1, 1.1) rotate(-2deg);
    }
  }

  &:focus {
    outline: none;
  }
`;
