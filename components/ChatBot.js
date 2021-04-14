import {
  StyledChatBot,
  StyledChatHeader,
  StyledChatContent,
  StyledChatAnswer,
} from 'styles/ChatBotStyle';

import OutsideClickHandler from 'react-outside-click-handler';

export default function ChatBot({ setChatBotState, chatBotState }) {
  const onCloseBtnClick = () => {
    setChatBotState('close');
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setChatBotState('close');
      }}
    >
      <StyledChatBot chatBotState={chatBotState}>
        <StyledChatHeader>
          <img src="/avatar.jpg" alt="Pic of Adrian" className="avatar" />
          <div>
            <span className="name">Adrian Bot</span>
            <span className="question">Ask me a question!</span>
          </div>

          <div className="align-left">
            <button className="close-btn" onClick={onCloseBtnClick}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.41425 6.00025L11.7072 1.70725C12.0982 1.31625 12.0982 0.68425 11.7072 0.29325C11.3162 -0.09775 10.6843 -0.09775 10.2933 0.29325L6.00025 4.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L4.58625 6.00025L0.29325 10.2933C-0.09775 10.6843 -0.09775 11.3162 0.29325 11.7072C0.48825 11.9022 0.74425 12.0002 1.00025 12.0002C1.25625 12.0002 1.51225 11.9022 1.70725 11.7072L6.00025 7.41425L10.2933 11.7072C10.4883 11.9022 10.7442 12.0002 11.0002 12.0002C11.2562 12.0002 11.5122 11.9022 11.7072 11.7072C12.0982 11.3162 12.0982 10.6843 11.7072 10.2933L7.41425 6.00025Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
        </StyledChatHeader>

        <StyledChatContent>
          <div className="agent">Hello! My name is Adrian Bot 🤖</div>

          <div className="agent">
            I know as much as Adrian. Maybe even a little bit more! 😉
          </div>

          <div className="agent">How can I help you today?</div>

          <div className="options">
            <button className="question-btn">
              👋 I'm good, just wanna say hi.
            </button>
            <button className="question-btn">🎉 Fun facts about you?</button>
            <button className="question-btn">
              💬 Others ways to contact you?
            </button>
            <button className="question-btn">💼 I'd like to hire you!</button>
          </div>
        </StyledChatContent>
      </StyledChatBot>
    </OutsideClickHandler>
  );
}
