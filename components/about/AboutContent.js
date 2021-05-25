import * as styled from './styles';

import { ChatBotContext } from 'components/layout/Layout';

import { useContext, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function AboutContent() {
  const setChatBotState = useContext(ChatBotContext);

  const ref = useRef();

  const controls = useAnimation();

  const [inViewRef, inView] = useInView({
    threshold: 0.35,
  });
  const [inViewRef2, inView2] = useInView({
    threshold: 0.35,
  });
  const [inViewRef3, inView3] = useInView({
    threshold: 0.35,
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
    <styled.About>
      <div className="heading">
        <h2>About me</h2>
        <p>
          Hello! My name is Adrian, I'm a&nbsp;
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
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
            ref={ref}
          >
            <Image
              src="/images/about/typewriter.png"
              alt="a cool typewriter"
              width={420}
              height={400}
              layout="responsive"
            />
          </styled.Img>
        </div>
        <div className="grid-container">
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I'm the one you'd like to work with
          </styled.Title>
          <styled.Description
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
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
          </styled.Description>
        </div>
        <div className="grid-container" ref={inViewRef2}>
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I like to dream more, learn more and become more.
          </styled.Title>
          <styled.Description
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
              <li>Advanced React Patterns</li>
              <li>React Testing</li>
            </ul>
          </styled.Description>
        </div>
        <div className="grid-container">
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <Image
              src="/images/about/tools.png"
              alt="a cool rocket"
              width={400}
              height={450}
              layout="responsive"
            />
          </styled.Img>
        </div>
        <div className="grid-container" ref={inViewRef3}>
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <Image
              src="/images/about/mails.png"
              alt="a cool mailbox"
              width={430}
              height={450}
              layout="responsive"
            />
          </styled.Img>
        </div>
        <div className="grid-container">
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            I'm always open to job opportunities and new connections.
          </styled.Title>
          <styled.Description
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
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
              <styled.Button>
                <a href="mailto:xiaxi.li.syd@gmail.com">
                  <styled.EmailIcon />
                  Email
                </a>
              </styled.Button>
              <styled.Button>
                <a href="#">
                  <styled.ResumeIcon />
                  Resume
                </a>
              </styled.Button>
            </div>
          </styled.Description>
        </div>
      </div>
      <div className="copyright">
        Designed & Built with love ❤️ by <br /> Adrian Li © 2021
      </div>
    </styled.About>
  );
}
