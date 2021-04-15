import {
  StyledGrid,
  StyledGridItem,
  StyledGridItemBg,
  StyledGridItemInner,
} from 'styles/GridStyle';
import Link from 'next/link';

import { gridAnimation } from 'styles/gridAnimation';

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Grid({ gridState, setGridState, chatBotState }) {
  const onCloseButtonClick = () => {
    setGridState('close');
  };

  const controls = useAnimation();
  const {
    animate1,
    animate2,
    animate3,
    animate4,
    animate5,
    animate6,
    animate7,
    animate8,
    animate9,
    animate1Close,
    animate2Close,
    animate3Close,
    animate4Close,
    animate5Close,
    animate6Close,
    animate7Close,
    animate8Close,
    animate9Close,
    textAnimation,
  } = gridAnimation;

  useEffect(() => {
    const onMouseScroll = () => {
      if (chatBotState === 'open') return;
      if (window.location.pathname === '/') {
        setGridState('open');
      }
    };

    window.addEventListener('wheel', onMouseScroll);

    if (gridState === 'open') {
      controls.start({
        opacity: 1,
        scaleY: [0, 1],
        transition: { duration: 0.03, ease: 'easeInOut' },
      });
    }

    if (gridState === 'close') {
      controls.start({
        opacity: 0,
        scaleY: [0, 1],
        transition: { duration: 0.03, ease: 'easeInOut' },
      });
    }

    return () => {
      window.removeEventListener('wheel', onMouseScroll);
    };
  }, [gridState, chatBotState]);

  return (
    <StyledGrid gridState={gridState}>
      <StyledGridItem>
        <StyledGridItemBg
          pos={0}
          color={'#F1D3B9'}
          gridState={gridState}
          animate={controls}
        ></StyledGridItemBg>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={1}
          color={'#DF9E98'}
          gridState={gridState}
          animate={gridState === 'open' ? animate1 : animate1Close}
        ></StyledGridItemBg>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={2}
          color={'#fefaf6'}
          gridState={gridState}
          animate={gridState === 'open' ? animate2 : animate2Close}
        ></StyledGridItemBg>
        <div className="grid__item-content btn">
          <StyledGridItemInner
            animate={gridState === 'open' ? textAnimation : null}
          >
            <button onClick={onCloseButtonClick} className="menu-trigger">
              - close
            </button>
          </StyledGridItemInner>
        </div>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={3}
          color={'#9ED4D4'}
          gridState={gridState}
          animate={gridState === 'open' ? animate3 : animate3Close}
        ></StyledGridItemBg>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={4}
          color={'#232320'}
          gridState={gridState}
          animate={gridState === 'open' ? animate4 : animate4Close}
        ></StyledGridItemBg>
        <Link href="/" passHref>
          <a className="grid__link grid__item-content home">
            <StyledGridItemInner
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 onClick={onCloseButtonClick} className="grid__item-title ">
                Home
              </h3>
            </StyledGridItemInner>
          </a>
        </Link>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={5}
          gridState={gridState}
          animate={gridState === 'open' ? animate5 : animate5Close}
        ></StyledGridItemBg>
        <Link href="/work/project5" passHref>
          <a className="grid__link grid__item-content">
            <StyledGridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">venue</h3>
              <span className="grid__item-desc">One place for all.</span>
            </StyledGridItemInner>
          </a>
        </Link>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={6}
          gridState={gridState}
          animate={gridState === 'open' ? animate6 : animate6Close}
        ></StyledGridItemBg>
        <Link href="/work/project4" passHref>
          <a className="grid__link grid__item-content">
            <StyledGridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">sponsors</h3>
              <span className="grid__item-desc">Find out who supports us.</span>
            </StyledGridItemInner>
          </a>
        </Link>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={7}
          gridState={gridState}
          animate={gridState === 'open' ? animate7 : animate7Close}
        ></StyledGridItemBg>
        <Link href="/work/project3" passHref>
          <a className="grid__link grid__item-content">
            <StyledGridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">tickets</h3>
              <span className="grid__item-desc">Get the right ticket</span>
            </StyledGridItemInner>
          </a>
        </Link>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={8}
          gridState={gridState}
          animate={gridState === 'open' ? animate8 : animate8Close}
        ></StyledGridItemBg>
        <Link href="/work/project2" passHref>
          <a className="grid__link grid__item-content">
            <StyledGridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">speakers</h3>
              <span className="grid__item-desc">
                Smart people. All in one place.
              </span>
            </StyledGridItemInner>
          </a>
        </Link>
      </StyledGridItem>
      <StyledGridItem>
        <StyledGridItemBg
          pos={9}
          gridState={gridState}
          animate={gridState === 'open' ? animate9 : animate9Close}
        ></StyledGridItemBg>
        <Link href="/work/project1" passHref>
          <a className="grid__link grid__item-content">
            <StyledGridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">schedule</h3>
              <span className="grid__item-desc">
                When the time is right, you'll learn.
              </span>
            </StyledGridItemInner>
          </a>
        </Link>
      </StyledGridItem>
    </StyledGrid>
  );
}
