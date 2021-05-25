import * as styled from './styles';

export default function Hero() {
  return (
    <styled.Hero>
      <styled.Description
        variants={styled.descriptionVariants}
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
      </styled.Description>
    </styled.Hero>
  );
}
