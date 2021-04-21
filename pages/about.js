import {
  StyledAboutPage,
  StyledImg,
  StyledTitle,
  StyledDescription,
  StyledButton,
} from 'styles/AboutPageStyle';

import { ChatBotContext } from 'components/layout/Layout';
import { EmailIcon, ResumeIcon } from 'components/ui/Icons';

import { useContext, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export default function About() {
  const setChatBotState = useContext(ChatBotContext);

  const ref = useRef();

  const controls = useAnimation();

  const [inViewRef, inView] = useInView({
    threshold: 0.25,
  });
  const [inViewRef2, inView2] = useInView({
    threshold: 0.25,
  });
  const [inViewRef3, inView3] = useInView({
    threshold: 0.25,
  });

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

  const onChatClick = () => {
    setChatBotState('open');
  };

  return (
    <StyledAboutPage>
      <div className="heading">
        <h2>About me</h2>
        <p>
          Hello! My name is Adrian, I'm a
          <span className="line">self-taught</span> front-end developer
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
              <StyledButton>
                <a href="mailto:xiaxi.li.syd@gmail.com">
                  <EmailIcon />
                  Email
                </a>
              </StyledButton>
              <StyledButton>
                <a href="#">
                  <ResumeIcon />
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
