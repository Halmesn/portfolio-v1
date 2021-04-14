import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeroSection = styled.section`
  width: 90%;
  margin: 0 auto;
  align-self: center;
`;

export const StyledDescription = styled(motion.div)`
  transform: translateY(-1rem);

  h1 {
    font-size: 7.2rem;
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
