import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  width: 90%;
  margin: 0 auto;
  align-self: center;
  z-index: 1;
`;

export const Description = styled(motion.div)`
  h1 {
    font-size: clamp(5.6rem, 4.8vw, 9rem);
    line-height: 1.1;
    color: ${({ theme }) => theme.title};

    span {
      font-family: 'Bogart';
      font-weight: 500;
      display: block;
    }
  }

  p {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.grey};
    margin-top: 2.2rem;
    line-height: 1.7;
    span {
      display: block;
    }
  }
`;
