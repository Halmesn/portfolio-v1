import * as Styled from 'components/layout/GridStyle';
import { gridAnimations } from 'utilities/gridAnimation';

import { useEffect } from 'react';
import Link from 'next/link';

import { useAnimation } from 'framer-motion';

export default function Grid({ gridState, setGridState }) {
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
  } = gridAnimations;

  useEffect(() => {
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
  }, [gridState]);

  return (
    <Styled.Grid gridState={gridState}>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={0}
          color={'#F1D3B9'}
          gridState={gridState}
          animate={controls}
        ></Styled.GridItemBg>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={1}
          color={'#DF9E98'}
          gridState={gridState}
          animate={gridState === 'open' ? animate1 : animate1Close}
        ></Styled.GridItemBg>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={2}
          color={'#fefaf6'}
          gridState={gridState}
          animate={gridState === 'open' ? animate2 : animate2Close}
        ></Styled.GridItemBg>
        <div className="grid__item-content btn">
          <Styled.GridItemInner
            animate={gridState === 'open' ? textAnimation : null}
          >
            <button onClick={onCloseButtonClick} className="menu-trigger">
              - close
            </button>
          </Styled.GridItemInner>
        </div>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={3}
          color={'#9ED4D4'}
          gridState={gridState}
          animate={gridState === 'open' ? animate3 : animate3Close}
        ></Styled.GridItemBg>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={4}
          color={'#232320'}
          gridState={gridState}
          animate={gridState === 'open' ? animate4 : animate4Close}
        ></Styled.GridItemBg>
        <Link href="/" passHref>
          <a className="grid__link grid__item-content home">
            <Styled.GridItemInner
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 onClick={onCloseButtonClick} className="grid__item-title ">
                Home
              </h3>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={5}
          gridState={gridState}
          animate={gridState === 'open' ? animate5 : animate5Close}
        ></Styled.GridItemBg>
        <Link href="/work/project5" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">venue</h3>
              <span className="grid__item-desc">One place for all.</span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={6}
          gridState={gridState}
          animate={gridState === 'open' ? animate6 : animate6Close}
        ></Styled.GridItemBg>
        <Link href="/work/project4" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">sponsors</h3>
              <span className="grid__item-desc">Find out who supports us.</span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={7}
          gridState={gridState}
          animate={gridState === 'open' ? animate7 : animate7Close}
        ></Styled.GridItemBg>
        <Link href="/work/project3" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">tickets</h3>
              <span className="grid__item-desc">Get the right ticket</span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={8}
          gridState={gridState}
          animate={gridState === 'open' ? animate8 : animate8Close}
        ></Styled.GridItemBg>
        <Link href="/work/project2" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">speakers</h3>
              <span className="grid__item-desc">
                Smart people. All in one place.
              </span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={9}
          gridState={gridState}
          animate={gridState === 'open' ? animate9 : animate9Close}
        ></Styled.GridItemBg>
        <Link href="/work/project1" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={gridState === 'open' ? textAnimation : null}
            >
              <h3 className="grid__item-title">schedule</h3>
              <span className="grid__item-desc">
                When the time is right, you'll learn.
              </span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
    </Styled.Grid>
  );
}
