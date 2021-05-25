import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  LinkWrapper as ReuseLinkWrapper,
  NavLink as ReuseNavLink,
  Icon as ReuseIcon,
} from 'components/layout/header/navbarStyles';

export const Hero = styled.section`
  width: 90%;
  margin: 0 auto;
  align-self: center;
  z-index: 1;

  @media (max-width: 26.5625em) {
    align-self: start;
    margin-top: 15rem;
  }
`;

export const Description = styled(motion.div)`
  h1 {
    font-size: clamp(4rem, 4.8vw, 9rem);
    line-height: 1.1;
    color: ${({ theme }) => theme.title};

    span {
      font-family: 'Bogart';
      font-weight: 500;
      display: block;
    }
  }

  p {
    font-size: clamp(1.6rem, 1.8vw, 1.75rem);
    color: ${({ theme }) => theme.grey};
    margin-top: 2.2rem;
    line-height: 1.7;
    span {
      display: block;
      margin-top: 1rem;
    }
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

export const NavLink = styled.a`
  background: #fff6eb;
  color: #462905;
  transition: all 0.2s ease-in-out;
  border-radius: 2rem;
  padding: 1.2rem 2rem;
  border: 0;
  font-size: 1.5rem;
  display: inline-block;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;
export const Icon = styled(ReuseIcon)``;

export const descriptionVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};
