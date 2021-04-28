import { css } from 'styled-components';

export const navBtn = css`
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
      background-color: ${({ theme }) => theme.line};
      bottom: -1rem;
      left: 0;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`;
