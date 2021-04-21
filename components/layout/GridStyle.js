import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledGrid = styled.div`
  display: grid;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  grid-template-columns: repeat(32, 3.125vw);
  grid-template-rows: repeat(32, 3.125vh);
  pointer-events: ${(props) => (props.gridState === 'open' ? 'auto' : 'none')};

  .grid__item-content {
    position: relative;
    color: #fff;
    transition: all 0.3s;
    overflow: hidden;

    :hover:not(.btn):not(.home),
    :focus:not(.btn):not(.home) {
      transform: translate3d(0, -5px, 0);
    }
  }

  .grid__item-title {
    font-weight: normal;
    font-size: 2.4rem;
    letter-spacing: 0.15rem;
    color: #232320;
  }

  .menu-trigger {
    font-family: 'JosefinSans';
    font-size: 2rem;
    display: inline-block;
    background: none;
    border: 0;
    cursor: pointer;
    color: #232320;
    outline: none;
  }

  .grid__item-desc {
    font-size: 1.6rem;
    margin: 0.5rem 0 0 0;
    color: #232320;

    ::after {
      content: '...';
      position: relative;
      display: block;
      font-size: 1.75rem;
    }
  }
`;

export const StyledGridItemInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  opacity: 0;
`;

export const StyledGridItem = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  :first-child {
    grid-area: 31 / 1 / 33 / 2;
  }

  :nth-child(2) {
    grid-area: 31 / 2 / 33 / 3;
  }

  :nth-child(3) {
    grid-area: 29 / 1 / 31 / 3;
  }

  :nth-child(4) {
    grid-area: 29 / 3 / 33 / 5;
  }

  :nth-child(5) {
    grid-area: 25 / 1 / 29 / 5;
    .grid__item-title {
      color: #fefaf6;
    }
  }

  :nth-child(6) {
    grid-area: 25 / 5 / 33 / 9;

    .grid__item-title {
      font-size: 3.2rem;
    }
  }

  :nth-child(7) {
    grid-area: 17 / 1 / 25 / 9;

    .grid__item-title {
      font-size: 4.8rem;
    }
  }

  :nth-child(8) {
    grid-area: 17 / 9 / 33 / 17;

    .grid__item-title {
      font-size: 5.6em;
    }
  }

  :nth-child(9) {
    grid-area: 1 / 1 / 17 / 17;

    .grid__item-title {
      font-size: 5.6rem;
    }
  }

  :nth-child(10) {
    grid-area: 1 / 17 / 33 / 33;

    .grid__item-title {
      font-size: 7.2rem;
    }
  }
`;

export const StyledGridItemBg = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: ${(props) =>
    props.pos % 2 === 0 ? 'scaleY(0) scaleX(1)' : 'scaleY(1) scaleX(0)'};
  opacity: 0;
  box-shadow: 0 0 0 2px currentColor;
  background: ${(props) =>
    props.pos === 6
      ? `#7296de`
      : props.pos === 7
      ? `#7c95b5`
      : props.pos === 9
      ? `#c57d76`
      : props.pos === 8
      ? `#af9b9b`
      : props.pos === 5
      ? `#ccd6f6`
      : props.color};
  color: ${(props) => props.color};
  transform-origin: ${(props) => {
    if (props.gridState === 'open') {
      return props.pos % 2 === 0 ? '50% 100%' : '0% 50%';
    }
    if (props.gridState === 'close') {
      return props.pos % 2 === 0 ? '50% 0%' : '100% 50%';
    }
  }};
`;
