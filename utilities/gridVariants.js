const durationsVisible = [];
const delaysVisible = [];
const durationsClose = [];
const delaysClose = [];

const generateAnimation = (pos) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
      },
    },
    close: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  const scale = pos % 2 === 0 ? 'scaleY' : 'scaleX';

  const durationVisible = pos === 9 ? 0.4 : 0.04 + pos * 0.02;
  durationsVisible.push(durationVisible);

  const durationClose = pos === 9 ? 0.55 : 0.08 + pos * 0.01;
  durationsClose.push(durationClose);

  const delayVisible =
    pos === 0 ? 0 : delaysVisible[pos - 1] + durationsVisible[pos - 1];
  delaysVisible.push(delayVisible);

  const delayClose =
    pos === 0 ? 0 : delaysClose[pos - 1] + durationsClose[pos - 1];
  delaysClose.push(delayClose);

  variants.hidden[scale] = 0;
  variants.visible[scale] = 1;
  variants.visible.transition.duration = durationVisible;
  variants.visible.transition.delay = delayVisible;
  variants.close[scale] = 0;
  variants.close.transition.duration = durationClose;
  variants.close.transition.delay = delayClose;

  return variants;
};

export const gridItem0 = generateAnimation(0);
export const gridItem1 = generateAnimation(1);
export const gridItem2 = generateAnimation(2);
export const gridItem3 = generateAnimation(3);
export const gridItem4 = generateAnimation(4);
export const gridItem5 = generateAnimation(5);
export const gridItem6 = generateAnimation(6);
export const gridItem7 = generateAnimation(7);
export const gridItem8 = generateAnimation(8);
export const gridItem9 = generateAnimation(9);

export const gridText = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay: 1.4,
    },
  },
  close: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
};
