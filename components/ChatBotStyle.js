import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ChatBot = styled.div`
  width: 35rem;
  height: 60rem;
  border-radius: 6px;
  background: #fff;
  position: fixed;
  right: 4.5rem;
  bottom: 4.5rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 5px 30px 0 rgba(0, 0, 0, 0.15),
    0 3px 3px 0 rgba(0, 0, 0, 0.05);
  font-family: 'Biotif', Helvetica, Arial, sans-serif;
  pointer-events: none;
  opacity: 0;
  transform: translate3d(0, 3rem, 0);
  transition: all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${({ chatBotState }) =>
    chatBotState === 'open' &&
    css`
      opacity: 1;
      transform: translateZ(0);
      pointer-events: auto;
    `}

  .agent,
  .user {
    padding: 1.6rem;
    max-width: 90%;
    line-height: 1.5;
    border-radius: 1rem;
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  .mw-93 {
    max-width: 93%;
  }

  .agent {
    background: #fff;
    color: #222;
    border: 1px solid #c5ced6;
    margin-right: auto;

    .mt-sm {
      margin-top: 1rem;
    }

    .link-btn {
      background: #fff6eb;
      color: #462905;
      border-radius: 2rem;
      padding: 1.2rem 0.5rem;
      border: 0;
      font-size: 1.5rem;
      display: inline-block;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

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

  .user {
    background: #222;
    color: #fff;
    margin-left: auto;
  }
`;

export const ChatHeader = styled.div`
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
  z-index: 3;

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

export const ChatContent = styled.div`
  height: 52rem;
  width: 100%;
  position: absolute;
  top: 8rem;
  padding: 0 1.6rem 4rem;
  overflow: auto;
`;

export const ChatAnswer = styled(motion.div)`
  display: ${({ currentQuestion }) =>
    currentQuestion === 0 ? 'none' : 'flex'};
  pointer-events: ${({ currentQuestion }) =>
    currentQuestion === 0 ? 'none' : 'auto'};
  flex-direction: column;
`;

export const ChatQuestion = styled(motion.div)`
  margin-top: 1rem;

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

    :first-child {
      display: ${({ currentQuestion }) =>
        currentQuestion === 1 ? 'none' : 'initial'};
    }

    :nth-child(2) {
      display: ${({ currentQuestion }) =>
        currentQuestion === 2 ? 'none' : 'initial'};
    }

    :nth-child(3) {
      display: ${({ currentQuestion }) =>
        currentQuestion === 3 ? 'none' : 'initial'};
    }

    :nth-child(4) {
      display: ${({ currentQuestion }) =>
        currentQuestion === 4 ? 'none' : 'initial'};
    }

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
`;
