import styled from 'styled-components';

export const ThemeToggler = styled.div`
  transform: translate(1rem, -2px);

  @media (max-width: 53.125em) {
    margin-left: auto;
  }

  @keyframes line-animation {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(5px);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-15px);
    }
    85% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes click-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  .power-switch {
    --color: ${({ theme }) => theme.secondary};
    width: 3.5rem;
    height: 3.5rem;
    position: relative;
    .button {
      height: 100%;
      position: relative;
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: radial-gradient(
          circle closest-side,
          var(--color),
          transparent
        );
        filter: blur(20px);
        opacity: 0;
        transition: opacity 1s ease, transform 1s ease;
        transform: perspective(1px) translateZ(0);
      }
      .power-on {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
        fill: none;
        stroke: var(--color);
        stroke-width: 8px;
        stroke-linecap: round;
        stroke-linejoin: round;
        filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8));
        .line {
          opacity: 0.2;
          opacity: 0;
          transition: opacity 0.3s ease 1s;
        }
        .circle {
          opacity: 0.2;
          transform: rotate(-58deg);
          transform-origin: center 1.9rem;
          stroke-dasharray: 220;
          stroke-dashoffset: 40;
          opacity: 1;
          stroke-dashoffset: 220;
          transition: transform 0s ease, stroke-dashoffset 1s ease 0s;
        }
      }
      .power-off {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
        fill: none;
        stroke: var(--color);
        stroke-width: 8px;
        stroke-linecap: round;
        stroke-linejoin: round;
        .line {
          opacity: 0.6;
        }
        .circle {
          opacity: 0.6;
          transform: rotate(-58deg);
          transform-origin: center 1.9rem;
          stroke-dasharray: 220;
          stroke-dashoffset: 40;
        }
      }
    }
    input {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 2;
      cursor: pointer;
      opacity: 0;
      &:checked {
        + {
          .button {
            &:after {
              opacity: 0.15;
              transform: scale(2) perspective(1px) translateZ(0);
              backface-visibility: hidden;
              transition: opacity 0.5s ease, transform 0.5s ease;
            }
            .power-on {
              animation: click-animation 0.3s ease forwards;
              transform: scale(1);
              .line {
                animation: line-animation 0.8s ease-in forwards;
                opacity: 1;
                transition: opacity 0.05s ease-in 0.55s;
              }
              .circle {
                transform: rotate(302deg);
                transform: rotate(302deg);
                stroke-dashoffset: 40;
                transition: transform 0.4s ease 0.2s,
                  stroke-dashoffset 0.4s ease 0.2s;
              }
            }
            .power-off {
              animation: click-animation 0.3s ease forwards;
              transform: scale(1);
              .line {
                animation: line-animation 0.8s ease-in forwards;
              }
              .circle {
                transform: rotate(302deg);
              }
            }
          }
        }
      }
    }
  }
`;
