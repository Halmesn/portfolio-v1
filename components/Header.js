import { StyledHeader, StyledDescription } from 'styles/HeaderStyle';

export default function Header() {
  return (
    <StyledHeader>
      <StyledDescription>
        <h1>
          Hi. I'm Adrian Li. <span>A front-end developer.</span>
        </h1>
        <p>
          I like to spend hours and hours building things, resolving problems
          and learning new technologies.
          <span>Programming makes me a happy man.</span>
        </p>
      </StyledDescription>
    </StyledHeader>
  );
}
