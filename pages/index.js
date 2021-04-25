import * as Styled from 'styles/HomeStyle';

const descriptionVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export default function Home() {
  return (
    <Styled.HeroSection>
      <Styled.Description
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>
          Hi. I'm Adrian Li. <span>A front-end developer.</span>
        </h1>
        <p>
          I love to spend hours and hours building things, resolving problems,
          and learning new technologies.
          <span>Programming makes me a happy man.😄</span>
        </p>
      </Styled.Description>
    </Styled.HeroSection>
  );
}
