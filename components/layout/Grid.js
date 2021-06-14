import * as styled from 'components/layout/gridStyles';
import * as gridVariants from 'helpers/gridHelpers';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useAnimation } from 'framer-motion';

export default function Grid({ gridState, setGridState }) {
  const controls = useAnimation();

  useEffect(() => {
    gridState === 'open' && controls.start('visible');
    gridState === 'close' && controls.start('close');
  }, [gridState]);

  return (
    <styled.Grid gridState={gridState}>
      <styled.GridItem>
        <styled.GridItemBg
          pos={0}
          color={'#F1D3B9'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem0}
        ></styled.GridItemBg>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={1}
          color={'#DF9E98'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem1}
        ></styled.GridItemBg>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={2}
          color={'#fefaf6'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem2}
        ></styled.GridItemBg>
        <div className="grid__item-content btn">
          <styled.GridItemInner
            animate={controls}
            initial="hidden"
            variants={gridVariants.gridText}
          >
            <button
              onClick={() => setGridState('close')}
              className="menu-trigger"
            >
              - close
            </button>
          </styled.GridItemInner>
        </div>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={3}
          color={'#9ED4D4'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem3}
        ></styled.GridItemBg>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={4}
          color={'#232320'}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem4}
        ></styled.GridItemBg>
        <Link href="/" passHref>
          <a className="grid__link grid__item-content home">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3
                onClick={() => setGridState('close')}
                className="grid__item-title "
              >
                Home
              </h3>
            </styled.GridItemInner>
          </a>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={5}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem5}
        ></styled.GridItemBg>
        <Link href="#" passHref>
          <a className="grid__link grid__item-content">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </styled.GridItemInner>
          </a>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={6}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem6}
        ></styled.GridItemBg>
        <Link href="#" passHref>
          <a className="grid__link grid__item-content">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </styled.GridItemInner>
          </a>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={7}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem7}
        ></styled.GridItemBg>
        <Link href="#" passHref>
          <a className="grid__link grid__item-content">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </styled.GridItemInner>
          </a>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={8}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem8}
        ></styled.GridItemBg>
        <Link href="#" passHref>
          <a className="grid__link grid__item-content">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </styled.GridItemInner>
          </a>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          pos={9}
          gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem9}
        >
          <Image
            src="/images/grid/hotflix.jpg"
            alt="hotflix"
            layout="fill"
            objectFit="cover"
          />
          <styled.GridOverLay />
        </styled.GridItemBg>
        <Link href="/project/hotflix" passHref>
          <a className="grid__link grid__item-content">
            <styled.GridItemInner
              onClick={() => setGridState('close')}
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">Hotflix</h3>
              <span className="grid__item-desc no-after">
                A project that got 3.5k upvotes on Reddit
              </span>
            </styled.GridItemInner>
          </a>
        </Link>
      </styled.GridItem>
    </styled.Grid>
  );
}
