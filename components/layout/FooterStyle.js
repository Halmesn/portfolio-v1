import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  bottom: 4%;
  z-index: 2;
  opacity: ${({ gridState }) => (gridState === 'open' ? '0' : '1')};
  pointer-events: ${({ gridState }) =>
    gridState === 'open' ? 'none' : 'auto'};
`;

export const GridButton = styled.button`
  font-family: 'JosefinSans';
  font-size: 2rem;
  display: inline-block;
  background: none;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  margin-left: 3rem;
  outline: none;
`;

export const ChatButton = styled.button`
  background: ${({ theme }) => theme.secondary};
  border-radius: 50%;
  border: 0;
  bottom: 3%;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);
  width: 5.5rem;
  height: 5.5rem;
  position: fixed;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 1;
  cursor: pointer;
  outline: none;

  ${({ chatBotState }) =>
    chatBotState === 'open' &&
    css`
      pointer-events: none;
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
    `}

  :hover {
    background: ${({ theme }) => theme.btnHover};
  }
`;
