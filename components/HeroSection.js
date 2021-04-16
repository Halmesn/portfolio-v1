import { StyledHeroSection, StyledDescription } from 'styles/HeroSectionStyle';

export default function HeroSection() {
  return (
    <StyledHeroSection>
      <StyledDescription
        animate={{
          opacity: [0, 1],
          y: 20,
          transition: { duration: 0.6, delay: 0.3 },
        }}
      >
        <h1>
          Hi. I'm Adrian Li. <span>A front-end developer.</span>
        </h1>
        <p>
          I love to spend hours and hours building things, resolving problems,
          and learning new technologies.
          <span>Programming makes me a happy man.😄</span>
        </p>
      </StyledDescription>
    </StyledHeroSection>
  );
}
