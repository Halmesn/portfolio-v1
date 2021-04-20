import {
  StyledChatBot,
  StyledChatHeader,
  StyledChatContent,
  StyledChatAnswer,
  StyledChatQuestion,
} from 'styles/ChatBotStyle';

import TypingBubble from 'components/TypingBubble';
import { ChatbotCloseIcon } from 'components/Icons';

import OutsideClickHandler from 'react-outside-click-handler';
import { useState, useRef, useEffect } from 'react';

export default function ChatBot({ setChatBotState, chatBotState }) {
  const contentRef = useRef();

  const Delayed = ({ children }) => {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
      let mounted = true;
      setTimeout(() => {
        if (mounted) {
          setIsShown(true);
          contentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 2000);
      return () => (mounted = false);
    }, []);

    return isShown ? children : <TypingBubble />;
  };

  const ChatQNA = ({ currentQuestion, setCurrentQuestion }) => {
    const question =
      currentQuestion === 1
        ? `I'm good, just wanna say hi.`
        : currentQuestion === 2
        ? `Fun facts about you?`
        : currentQuestion === 3
        ? `Others ways to contact you?`
        : currentQuestion === 4
        ? `I'd like to hire you!`
        : null;
    const answer =
      currentQuestion === 1 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>Well hi there!</p>
            <br />
            <p>Thanks for saying hi 😁.</p>
            <br />
            <p> I hope you've enjoyed browsing my website!</p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 2 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>
              1. I used to be a news writer✍️ on Tencent platform for 4 years.
              And there is one article that had got more than 15 millions views
              in less than 15 hours.
            </p>
            <br />
            <p>
              2. I want to become a competitive powerlifer💪 in my 30's, and a
              jacked old man in my 80's.
            </p>
            <br />
            <p>
              3. I really really love my wife. She is the most gorgeous woman in
              the world👩!
            </p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 3 ? (
        <Delayed>
          <div className="agent mw-93" ref={contentRef}>
            <p>📧 Here is my email:</p>
            <br />
            <p>
              <a href="mailto:xiaxi.li.syd@gmail.com">
                {' '}
                xiaxi.li.syd@gmail.com
              </a>
            </p>
            <br />
            <p>I'm always open to job opportunities and new connections🤝!</p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 4 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>That's great!</p>
            <p className="mt-sm">I'm so Excited🕺!</p>
            <p>
              Have a look at my{' '}
              <a href="#" className="link-btn">
                resume💾
              </a>{' '}
              and let's
              <a href="mailto:xiaxi.li.syd@gmail.com" className="link-btn">
                chat💌
              </a>{' '}
              further!
            </p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : (
        ''
      );

    const onBtn1Click = () => {
      setCurrentQuestion(1);
    };
    const onBtn2Click = () => {
      setCurrentQuestion(2);
    };
    const onBtn3Click = () => {
      setCurrentQuestion(3);
    };
    const onBtn4Click = () => {
      setCurrentQuestion(4);
    };

    return (
      <>
        <StyledChatAnswer currentQuestion={currentQuestion}>
          <div tabIndex="-1" className="user">
            {question}
          </div>
          {answer}
        </StyledChatAnswer>
        <StyledChatQuestion currentQuestion={currentQuestion}>
          <button onClick={onBtn1Click} className="question-btn">
            👋 I'm good, just wanna say hi.
          </button>
          <button onClick={onBtn2Click} className="question-btn">
            🎉 Fun facts about you?
          </button>
          <button onClick={onBtn3Click} className="question-btn">
            💬 Others ways to contact you?
          </button>
          <button onClick={onBtn4Click} className="question-btn">
            💼 I'd like to hire you!
          </button>
        </StyledChatQuestion>
      </>
    );
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onCloseBtnClick = () => {
    setChatBotState('close');
    setCurrentQuestion(0);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setChatBotState('close');
        setCurrentQuestion(0);
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
              <ChatbotCloseIcon />
            </button>
          </div>
        </StyledChatHeader>

        <StyledChatContent>
          <div className="agent">Hello! My name is Adrian Bot 🤖</div>

          <div className="agent">
            I know as much as Adrian. Maybe even a little bit more! 😉
          </div>

          <div className="agent">How can I help you today?</div>

          <ChatQNA
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </StyledChatContent>
      </StyledChatBot>
    </OutsideClickHandler>
  );
}
