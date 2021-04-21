import { StyledHeroSection, StyledDescription } from 'styles/HomeStyle';

export default function Home() {
  return (
    <StyledHeroSection>
      <StyledDescription>
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
