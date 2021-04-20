import {
  StyledAboutPage,
  StyledImg,
  StyledTitle,
  StyledDescription,
  StyledButton,
} from 'styles/AboutPageStyle';

import { ChatBotContext } from 'components/Layout';

import { useContext, useEffect, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export default function About() {
  const onChatClick = () => {
    setChatBotState('open');
  };

  const ref = useRef();
  const [inViewRef, inView] = useInView({
    threshold: 0.25,
  });
  const [inViewRef2, inView2] = useInView({
    threshold: 0.25,
  });
  const [inViewRef3, inView3] = useInView({
    threshold: 0.25,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (inView2) {
      controls.start('visible2');
    }
    if (inView3) {
      controls.start('visible3');
    }
  }, [controls, inView, inView2, inView3]);

  const setChatBotState = useContext(ChatBotContext);

  return (
    <StyledAboutPage>
      <div className="heading">
        <h2>About me</h2>
        <p>
          Hello! My name is Adrian, I'm a{' '}
          <span className="line">self-taught</span> front-end developer{' '}
          <br></br> living in sunny Brisbane, Australia.
        </p>
        <span
          className="scroll"
          onClick={() => {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        ></span>
      </div>
      <div className="content">
        <div className="grid-container" ref={inViewRef}>
          <StyledImg
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
            ref={ref}
          >
            <img src="/typewriter.png" alt="a cool typewriter" />
          </StyledImg>
        </div>
        <div className="grid-container">
          <StyledTitle
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I'm the one you'd like to work with
          </StyledTitle>
          <StyledDescription
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>
              I’m a hard working and dedicated person with a determination to
              deliver the very highest quality. I take great pride in my work,
              and I always try to better myself with every project I work on.
            </p>
            <p></p>
          </StyledDescription>
        </div>
        <div className="grid-container" ref={inViewRef2}>
          <StyledTitle
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I like to dream more, learn more and become more.
          </StyledTitle>
          <StyledDescription
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="skills">
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

            <p>
              I’m also a fast learner, able to pick up new skills and juggle
              different projects with relative ease.
            </p>

            <p>The following are things I'm planning to learn this year:</p>
            <ul className="skills">
              <li>TypeScript</li>
              <li>React Design Pattern</li>
              <li>React Animations</li>
            </ul>
          </StyledDescription>
        </div>
        <div className="grid-container">
          <StyledImg
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <img src="/tools.png" alt="a cool rocket" />
          </StyledImg>
        </div>
        <div className="grid-container" ref={inViewRef3}>
          <StyledImg
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <img src="/mails.png" alt="a cool mailbox" />
          </StyledImg>
        </div>
        <div className="grid-container">
          <StyledTitle
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I'm always open to job opportunities and new connections.
          </StyledTitle>
          <StyledDescription
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>
              Shoot me over an email, have a look at my resume, or just&nbsp;
              <span onClick={onChatClick} className="chat">
                talk
              </span>
              &nbsp;with me!
            </p>
            <div className="buttons">
              {' '}
              <StyledButton>
                <a href="mailto:xiaxi.li.syd@gmail.com">
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
                  Email
                </a>
              </StyledButton>
              <StyledButton>
                <a href="#">
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
                  Resume
                </a>
              </StyledButton>
            </div>
          </StyledDescription>
        </div>
      </div>
      <div className="copyright">
        Designed & Built with love ❤️ by <br /> Adrian Li © 2021
      </div>
    </StyledAboutPage>
  );
}
