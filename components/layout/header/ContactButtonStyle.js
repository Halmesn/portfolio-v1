import styled from 'styled-components';
import { navBtn } from 'styles/Mixins';

export const ContactButton = styled.button`
  ${navBtn}

  &:hover {
    span::after {
      opacity: 1;
      transform: translateZ(0) scale3d(1.1, 1.1, 1.1) rotate(-2deg);
    }
  }

  &:focus {
    outline: none;
  }
`;
