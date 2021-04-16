import {
  StyledAboutPage,
  StyledAvatar,
  StyledTitle,
  StyledDescription,
  StyledResume,
} from 'styles/AboutPageStyle';

import { ChatBotContext } from 'components/Layout';

import { useContext } from 'react';

export default function About() {
  const onChatClick = () => {
    setChatBotState('open');
  };

  const setChatBotState = useContext(ChatBotContext);

  return (
    <StyledAboutPage>
      <div className="content">
        <StyledAvatar
          animate={{ opacity: [0, 1], y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/typewriter.png" alt="a cool typewriter" />
        </StyledAvatar>
        <div>
          <StyledTitle
            animate={{ opacity: [0, 1], y: -50 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            I'm Adrian, a <span className="line">self-taught</span> Front-end
            developer living in sunny Brisbane, Australia.
          </StyledTitle>
          <StyledDescription
            animate={{ opacity: [0, 1], y: -50 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p>
              I’m a hard working and dedicated person with a determination to
              deliver the very highest quality. I take great pride in my work,
              and I always try to better myself with every project I work on.
            </p>
            <p>
              I like to dream more, learn more, do more, and become more. I’m
              also a fast learner and firm believer that it's never too late to
              learn.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul class="skills">
              <li>HTML5 & CSS3</li>
              <li>Sass</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>NextJs</li>
              <li>Redux-toolkit</li>
              <li>Styled-Components</li>
              <li>Git</li>
              <li>Google Search</li>
            </ul>
            <StyledResume
              animate={{ opacity: [0, 1], y: -6 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="paper-plane"
                  className="svg-inline--fa fa-paper-plane fa-w-16 about__StyledIcon-sc-1wvwyem-4 iXaArJ"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                  ></path>
                </svg>
                Resume
              </a>
            </StyledResume>
          </StyledDescription>
        </div>
      </div>
      <div className="opportunity">
        <h2>
          I'm always open to
          <span>job opportunities and</span>
          <span>new connections.</span>
        </h2>
        <p>
          Send me over an email, and{' '}
          <span onClick={onChatClick} className="chat">
            let's chat.
          </span>
        </p>
      </div>
    </StyledAboutPage>
  );
}
