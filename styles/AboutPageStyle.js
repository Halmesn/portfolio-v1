import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAboutPage = styled.section`
  padding: 0 0 8rem 0;
  position: relative;

  .copyright {
    font-size: 1.5rem;
    font-family: 'JosefinSans';
    color: ${({ theme }) => theme.grey};
    text-align: center;
    width: 50%;
    margin: 0 auto;
    line-height: 1.5;
  }

  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.grey};
    margin-top: 2.5rem;
    line-height: 1.7;

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
        background: ${({ theme }) => theme.line};
        transition: all 0.2s ease-in-out;
        transform: rotate(1deg);
        z-index: -1;
      }
    }

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

    @media only screen and (max-width: 93.75em) {
      font-size: 1.6rem;
    }
  }

  .heading {
    width: 50%;
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    animation: fadeInUp 0.7s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .scroll {
      position: absolute;
      left: 50%;
      bottom: 2rem;
      animation: bounce 1s ease infinite;
      cursor: pointer;

      ::before {
        color: ${({ theme }) => theme.secondary};
        content: '╲╱';
        font-size: 2rem;
        height: 4rem;
        width: 6rem;
        letter-spacing: -1px;
        line-height: 4rem;
        margin-left: -3rem;
        opacity: 0.8;
        text-align: center;
      }
    }

    h2 {
      font-size: 7rem;
      color: ${({ theme }) => theme.secondary};
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(4rem);
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes bounce {
      50% {
        transform: translateY(-50%);
      }
    }
  }

  .content {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    align-items: center;
    gap: 9.5rem 3rem;
    padding-bottom: 6rem;

    .grid-container {
      transform: translateY(3.5rem);
    }

    @media only screen and (max-width: 71.25em) {
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 0 6vw 1rem 6vw;
    }

    @media only screen and (max-width: 56.25em) {
      width: 95%;
      padding: 0 6vw 1rem 6vw;
    }

    @media only screen and (max-width: 25em) {
      width: 100%;
      padding: 0 1vw 1rem 1vw;
    }
  }
`;

export const StyledImg = styled(motion.div)`
  img {
    transform: scale(0.85);
    filter: opacity(0.85);
    @media only screen and (max-width: 71.25em) {
      transform: scale(0.7);
    }
  }
`;

export const StyledTitle = styled(motion.h3)`
  font-size: 3.5rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.title};

  @media only screen and (max-width: 93.75em) {
    font-size: 3rem;
  }
`;

export const StyledDescription = styled(motion.div)`
  .skills {
    display: grid;
    grid-template-columns: repeat(3, minmax(14rem, 20rem));
    padding: 0px;
    margin: 2rem 0px 0px;
    overflow: hidden;
    list-style: none;
    font-size: 1.5rem;

    @media only screen and (max-width: 93.75em) {
      font-size: 1.4rem;
    }

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

        @media only screen and (max-width: 25em) {
          font-size: 1.8rem;
        }
      }
    }
  }

  .buttons {
    display: flex;
    gap: 2rem;
  }
`;

export const StyledButton = styled(motion.div)`
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

    @media only screen and (max-width: 71.25em) {
      margin-top: 5rem;
    }

    @media only screen and (max-width: 42.5em) {
      margin-top: 3rem;
    }

    :hover {
      transform: scale(1.05);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
    }
  }
`;
