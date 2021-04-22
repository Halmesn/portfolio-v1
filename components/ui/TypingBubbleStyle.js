import styled from 'styled-components';

export const TypingBubble = styled.div`
  background-color: #fff6eb;
  padding: 1.6rem 2.8rem;
  border-radius: 2rem;
  border-bottom-left-radius: 2px;
  margin-top: 1.2rem;
  width: 30%;

  .typing {
    align-items: center;
    display: flex;
    height: 1.7rem;

    .dot {
      animation: TypingAnimation 1s infinite ease-in-out;
      background-color: #ffdfb9;
      border-radius: 50%;
      height: 0.7rem;
      margin-right: 4px;
      vertical-align: middle;
      width: 0.7rem;
      display: inline-block;

      :nth-child(1) {
        animation-delay: 200ms;
      }

      :nth-child(2) {
        animation-delay: 300ms;
      }

      :nth-child(3) {
        animation-delay: 400ms;
      }

      :last-child {
        margin-right: 0;
      }
    }
  }

  @keyframes TypingAnimation {
    0% {
      transform: translateY(0px);
      background-color: #ffdfb9; // rgba(20,105,69,.7);
    }
    28% {
      transform: translateY(-7px);
      background-color: #ffc988; //rgba(20,105,69,.4);
    }
    44% {
      transform: translateY(0px);
      background-color: #feb254; //rgba(20,105,69,.2);
    }
  }
`;
