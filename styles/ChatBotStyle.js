import styled, { css } from 'styled-components';

export const StyledChatBot = styled.div`
  width: 35rem;
  height: 60rem;
  border-radius: 6px;
  background: #fff;
  position: fixed;
  right: 4.5rem;
  bottom: 8rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 5px 30px 0 rgba(0, 0, 0, 0.15),
    0 3px 3px 0 rgba(0, 0, 0, 0.05);
  font-family: 'Biotif', Helvetica, Arial, sans-serif;
  pointer-events: none;
  opacity: 0;
  transform: translate3d(0, 3rem, 0);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${(props) =>
    props.chatBotState === 'open' &&
    css`
      opacity: 1;
      transform: translate3d(0, 3rem, 0);
      pointer-events: auto;
    `}

  .agent,
  .user {
    padding: 1.6rem;
    max-width: 90%;
    line-height: 1.5;
    border-radius: 1rem;
    font-size: 1.5rem;
    margin-top: 1.6rem;
  }

  .agent {
    background: #fff;
    color: #222;
    border: 1px solid #c5ced6;
  }
`;

export const StyledChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  padding: 2rem 1.6rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 6px 6px 0 0;

  .avatar {
    border-radius: 50%;
    border: 2px solid #fff;
    width: 4rem;
    height: 4rem;
    margin-right: 1.6rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .name,
  .question {
    color: #fff;
    display: block;
  }

  .name {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 3px;
  }

  .question {
    font-size: 1.4rem;
    opacity: 0.8;
  }

  .align-left {
    margin-left: auto;
  }

  .close-btn {
    background: #222;
    border: 0;
    padding: 1rem 1.5rem;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
    display: grid;
    place-items: center;
    cursor: pointer;
    outline: none;

    :active,
    :hover {
      background: #363636;
    }
  }
`;

export const StyledChatContent = styled.div`
  height: 52rem;
  width: 100%;
  position: absolute;
  top: 8rem;
  padding: 0 1.6rem 4rem;

  .options {
    margin-top: 1.6rem;

    .question-btn {
      background: #fff6eb;
      color: #462905;
      transition: all 0.2s ease-in-out;
      border-radius: 2rem;
      padding: 1.2rem 2rem;
      border: 0;
      font-size: 1.5rem;
      display: block;
      cursor: pointer;
      margin-top: 1rem;

      :hover {
        background: #ffebd2;
      }

      :active {
        background: #ffdfb8;
        outline: 0;
        transform: translateY(4px);
      }

      :focus {
        outline: 0;
      }
    }
  }
`;

export const StyledChatAnswer = styled.div`
  display: none;
  pointer-events: none;
`;
