import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAboutPage = styled.section`
  padding: 22rem 0 8rem 0;

  .line {
    position: relative;

    :hover {
      &::after {
        transform: scale3d(1.1, 1.1, 1.1);
      }
    }

    ::after {
      content: '';
      width: 100%;
      position: absolute;
      bottom: -0.8rem;
      height: 6px;
      left: 0;
      display: block;
      background: ${({ theme }) => theme.line};
      transform: rotate(-1deg);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

  .content {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding-bottom: 6rem;
    border-bottom: 4px solid ${({ theme }) => theme.aboutLine};
  }

  .opportunity {
    padding: 18rem 0;
    width: 50%;
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 6.4rem;
      line-height: 1.1;
      color: ${({ theme }) => theme.title};

      span {
        font-family: inherit;
        font-size: inherit;
        display: block;
      }
    }

    p {
      font-size: 2rem;
      margin-top: 2rem;
      color: ${({ theme }) => theme.grey};
    }

    .chat {
      position: relative;
      cursor: pointer;

      :hover {
        &::after {
          height: 1rem;
        }
      }

      ::after {
        content: '';
        width: 100%;
        position: absolute;
        bottom: -1px;
        height: 3px;
        left: 0;
        display: block;
        background: #ffc4ff;
        transition: all 0.2s ease-in-out;
        transform: rotate(1deg);
        z-index: -1;
      }
    }
  }
`;

export const StyledAvatar = styled(motion.div)`
  img {
    height: 50rem;
    width: 50rem;
    border: none;
    transform: scale(1.2) translateX(3.5vw);
  }
`;

export const StyledTitle = styled(motion.h2)`
  font-size: 3.5rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.title};
`;

export const StyledDescription = styled(motion.div)`
  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.grey};
    margin-top: 2.5rem;
    line-height: 1.7;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(3, minmax(14rem, 20rem));
    padding: 0px;
    margin: 2rem 0px 0px;
    overflow: hidden;
    list-style: none;
    font-size: 1.5rem;

    li {
      position: relative;
      margin-bottom: 1rem;
      padding-left: 2rem;
      color: ${({ theme }) => theme.grey};

      ::before {
        content: '▹';
        position: absolute;
        top: 4px;
        left: 0px;
        color: ${({ theme }) => theme.arrow};
        line-height: 12px;
        font-size: 2.5rem;
      }
    }
  }
`;

export const StyledResume = styled(motion.div)`
  display: flex;
  svg {
    width: 1.2rem;
    margin-right: 0.7rem;
  }

  a {
    background: ${({ theme }) => theme.aboutResume};
    color: currentColor;
    transition: all 0.2s ease-in-out;
    border-radius: 2rem;
    padding: 1.2rem 2rem;
    border: 1px solid ${({ theme }) => theme.secondary};
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    position: relative;
    transition: all 0.2s linear;

    :hover {
      transform: scale(1.05);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
    }
  }
`;
