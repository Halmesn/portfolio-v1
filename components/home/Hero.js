import * as styled from './styles';

import { ChatBotContext } from 'components/layout/Layout';

import { useContext } from 'react';
import { useViewport } from 'hooks/useViewport';

export default function Hero() {
  const { theme } = useContext(ChatBotContext);
  const { width } = useViewport();

  return (
    <styled.Hero>
      <styled.Description
        variants={styled.descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>
          Hi. I'm Adrian Li. <span>A front-end developer.</span>
        </h1>
        <p>
          I love to spend hours and hours building things, resolving problems,
          and learning new technologies.
          <span>Programming makes me a happy man.😄</span>
        </p>
      </styled.Description>
      {width < 850 && (
        <styled.LinkWrapper>
          <styled.NavLink href="https://github.com/Halmesn">
            <styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/github.svg'
                  : '/icons/github-dark.svg'
              }`}
              alt="github icon"
            ></styled.Icon>
            <span>GitHub</span>
          </styled.NavLink>
          <styled.NavLink
            href="https://www.linkedin.com/in/adrian-li-332395208/"
            rotate="-1deg"
          >
            <styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/linkedin.svg'
                  : '/icons/linkedin-dark.svg'
              }`}
              alt="linkedin icon"
            ></styled.Icon>
            <span>LinkedIn</span>
          </styled.NavLink>
        </styled.LinkWrapper>
      )}
    </styled.Hero>
  );
}
