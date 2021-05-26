import * as Styled from 'components/layout/GridStyle';
import * as gridVariants from 'helpers/gridHelpers';

import { useEffect } from 'react';
import Link from 'next/link';

import { useAnimation } from 'framer-motion';

export default function Grid({ gridState, setGridState }) {
  const onCloseButtonClick = () => {
    setGridState('close');
  };

  const controls = useAnimation();

  useEffect(() => {
    gridState === 'open' && controls.start('visible');
    gridState === 'close' && controls.start('close');
  }, [gridState]);

  return (
    <Styled.Grid gridState={gridState}>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={0}
          color={'#F1D3B9'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem0}
        ></Styled.GridItemBg>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={1}
          color={'#DF9E98'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem1}
        ></Styled.GridItemBg>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={2}
          color={'#fefaf6'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem2}
        ></Styled.GridItemBg>
        <div className="grid__item-content btn">
          <Styled.GridItemInner
            animate={controls}
            initial="hidden"
            variants={gridVariants.gridText}
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
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem3}
        ></Styled.GridItemBg>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={4}
          color={'#232320'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem4}
        ></Styled.GridItemBg>
        <Link href="/" passHref>
          <a className="grid__link grid__item-content home">
            <Styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
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
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem5}
        ></Styled.GridItemBg>
        <Link href="/work/project5" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={6}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem6}
        ></Styled.GridItemBg>
        <Link href="/work/project4" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={7}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem7}
        ></Styled.GridItemBg>
        <Link href="/work/project3" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={8}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem8}
        ></Styled.GridItemBg>
        <Link href="/work/project2" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
      <Styled.GridItem>
        <Styled.GridItemBg
          pos={9}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem9}
        ></Styled.GridItemBg>
        <Link href="/work/project1" passHref>
          <a className="grid__link grid__item-content">
            <Styled.GridItemInner
              onClick={onCloseButtonClick}
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">Hotflix</h3>
              <span className="grid__item-desc">
                A project that got 3.4k upvotes on Reddit.
              </span>
            </Styled.GridItemInner>
          </a>
        </Link>
      </Styled.GridItem>
    </Styled.Grid>
  );
}
