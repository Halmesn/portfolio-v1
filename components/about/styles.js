import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled.section`
  padding-bottom: 8rem;
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

    @media (max-width: 34.375em) {
      font-size: 1.4rem;
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

    @media (max-width: 56.25em) {
      height: 60vh;
      width: 80%;
    }

    .scroll {
      position: absolute;
      left: 50%;
      bottom: 2rem;
      animation: bounce 1.2s ease infinite;
      cursor: pointer;

      @media (max-width: 56.25em) {
        bottom: 4.3rem;
        pointer-events: none;
      }

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

        @media (max-width: 34.375em) {
          font-size: 1rem;
        }
      }
    }

    h2 {
      font-size: 7rem;
      color: ${({ theme }) => theme.secondary};

      @media (max-width: 34.375em) {
        font-size: 4.5rem;
      }
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
    padding: 5rem 0;

    @media (max-width: 56.25em) {
      grid-template-columns: 1fr;
      gap: 3rem 0;

      .grid-container:first-child {
        order: 1;

        @media (max-width: 34.375em) {
          width: 30rem;
          height: 30rem;
          justify-self: center;
        }
      }

      .grid-container:nth-child(2) {
        order: 0;
      }

      .grid-container:nth-child(3) {
        order: 2;
      }

      .grid-container:nth-child(4) {
        order: 3;

        @media (max-width: 34.375em) {
          width: 30rem;
          height: 30rem;
          justify-self: center;
        }
      }

      .grid-container:nth-child(5) {
        order: 5;

        @media (max-width: 34.375em) {
          width: 30rem;
          height: 30rem;
          justify-self: center;
        }
      }

      .grid-container:nth-child(6) {
        order: 4;
        @media (max-width: 34.375em) {
          margin-top: 2rem;
        }
      }
    }

    @media (max-width: 34.375em) {
      width: 100%;
      padding: 0 2rem;
    }
  }
`;

export const Img = styled(motion.div)`
  img {
    transform: scale(0.85);
    filter: opacity(0.85);
  }
`;

export const Title = styled(motion.h3)`
  font-size: 3.5rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.title};

  @media (max-width: 34.375em) {
    font-size: 2.5rem;
  }
`;

export const Description = styled(motion.div)`
  .skills {
    display: grid;
    grid-template-columns: repeat(3, minmax(14rem, 20rem));
    padding: 0;
    margin: 2rem 0 0;
    overflow: hidden;
    list-style: none;
    font-size: 1.5rem;

    &.one-column {
      grid-template-columns: 1fr;
      li:not(:last-child) {
        margin-bottom: 2rem;
      }
    }

    @media (max-width: 34.375em) {
      grid-template-columns: 1fr;

      li {
        font-size: 1.4rem;
      }
    }

    li {
      position: relative;
      margin-bottom: 1rem;
      padding-left: 2rem;
      color: ${({ theme }) => theme.grey};

      ::before {
        content: '▹';
        position: absolute;
        top: 0.6rem;
        left: 0;
        color: ${({ theme }) => theme.arrow};
        line-height: 12px;
        font-size: 2.5rem;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 2rem;
  }
`;

export const Button = styled(motion.div)`
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

export const EmailIcon = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
      ></path>
    </svg>
  );
};

export const ResumeIcon = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
      ></path>
    </svg>
  );
};
