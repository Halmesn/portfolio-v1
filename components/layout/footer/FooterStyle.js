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

  @media (max-width: 56.25em) {
    display: none;
  }
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

export const ChatBotIcon = ({ theme }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.1245 15H24.875C18.869 15 14 19.6557 14 25.3986C14 31.1419 18.869 36.0251 24.875 36.0251H27.1245C28.5007 36.0251 29.8164 35.5501 31.0277 35.1042L34.7099 36.9196C35.5358 37.229 36.4153 36.6034 36.3434 35.7578L36.1004 31.4793C37.7493 29.6565 38 27.9982 38 25.3986C38 19.6557 33.131 15 27.1245 15ZM34.1036 31.5927C34.0733 31.0585 34.2583 30.5344 34.6172 30.1376C35.7262 28.9116 36 27.9263 36 25.3986C36 20.7808 32.0459 17 27.1245 17H24.875C19.954 17 16 20.7808 16 25.3986C16 30.0739 20.0109 34.0251 24.875 34.0251H27.1245C27.9586 34.0251 28.7311 33.8185 30.3367 33.2274C30.851 33.038 31.4205 33.068 31.9121 33.3104L34.2672 34.4715L34.1036 31.5927ZM34.3467 35.8712L34.3439 35.8218C34.3443 35.8381 34.3452 35.8546 34.3467 35.8712Z"
        fill={`${theme === 'light' ? '#fff' : '#0a192f'}`}
      />
    </svg>
  );
};
