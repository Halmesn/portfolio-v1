import styled from 'styled-components';

export const ProjectAll = styled.section`
  margin: 0 auto;
  padding: 15rem 5rem;
  max-width: 100rem;

  @media (max-width: 30em) {
    padding: 10rem 2.5rem;
  }
`;

export const Heading = styled.h2`
  margin: 1rem 0 4rem;
  width: 100%;
  font-size: clamp(2.6rem, 5vw, 3.2rem);
  white-space: nowrap;
`;

export const ProjectsContainer = styled.ul`
  list-style: none;
`;

export const FeaturedProject = styled.li`
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 4rem 4rem 3rem;
  z-index: 5;
  text-align: left;
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
  grid-column: 1 / -1;

  @media (max-width: 30em) {
    padding: 3rem 2.5rem 2rem;
  }

  color: ${({ theme }) => theme.primary};

  .project-overline {
    margin: 1rem 0px;
    font-size: 1.8rem;
    font-weight: 400;
  }

  .project-title {
    font-size: clamp(2.4rem, 5vw, 2.8rem);
    margin: 0px 0px 20px;
    a {
      font-family: inherit;
      text-decoration: underline;
    }
  }

  .project-description {
    position: relative;
    z-index: 2;
    padding: 2.5rem;
    border-radius: 4px;
    background: ${({ theme }) => theme.aboutLine};
    color: ${({ theme }) => theme.secondary};
    font-size: 1.5rem;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
    justify-content: flex-end;
    font-size: 1.4rem;

    li {
      margin: 0px 0px 5px 20px;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
    justify-content: flex-end;
    margin-left: 0px;
    margin-right: -10px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const ProjectImage = styled.div`
  height: 100%;
  grid-area: 1 / 6 / -1 / -1;
  grid-column: 1 / -1;

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    vertical-align: middle;
    position: relative;

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 3;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      background: rgba(11, 18, 27, 0.7);
      border-radius: 4px;
    }

    img {
      border-radius: 4px;
    }
  }
`;
