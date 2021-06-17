import styled from 'styled-components';

export const Hotflix = styled.div`
  padding: ${({ padding }) => padding || '20rem 15rem'};

  @media (max-width: 53.125em) {
    padding: 20rem 8rem;
  }

  @media (max-width: 34.375em) {
    padding: 15rem 4rem;
  }

  img {
    border-radius: 5px;
  }
`;

export const TextContainer = styled.div`
  &.center {
    text-align: center;
    p {
      margin: 0 auto;
    }

    @media (max-width: 34.375em) {
      text-align: left;

      p {
        margin: unset;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 7rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.secondary};

  @media (max-width: 34.375em) {
    font-size: 5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 3rem;

  @media (max-width: 34.375em) {
    font-size: 3rem;
    line-height: 1.2;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  max-width: 80rem;
  color: ${({ theme }) => theme.grey};

  @media (max-width: 34.375em) {
    font-size: 1.6rem;
  }

  span {
    display: block;
    margin-top: 2rem;
    margin-bottom: 5rem;

    @media (max-width: 34.375em) {
      margin-bottom: 3rem;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.grey};
  font-size: 1.6rem;

  @media (max-width: 34.375em) {
    font-size: 1.4rem;
  }

  th {
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2;
    padding-bottom: 2rem;
  }

  td {
    width: 10rem;
    line-height: 1.8;
    position: relative;

    .arrow {
      color: ${({ theme }) => theme.arrow};
    }

    a {
      position: relative;
      z-index: 0;
      .link {
        position: relative;
        z-index: 0;
        ::before {
          content: '';
          width: 100%;
          position: absolute;
          z-index: -1;
          bottom: 1px;
          height: 3px;
          left: 0;
          display: block;
          background: ${({ theme }) => theme.line};
          transition: all 0.2s ease-in-out;
          transform: rotate(1deg);
        }
      }

      :hover {
        .link::before {
          height: 0.6rem;
        }
      }
    }
  }
`;

export const ImageContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;

  @media (max-width: 34.375em) {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  @media (max-width: 67.5em) {
    flex-direction: column;
  }

  @media (max-width: 53.125em) {
    gap: 0;
  }
`;

export const GridContainer = styled.div`
  margin: 9rem 0;
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (max-width: 34.375em) {
    margin: 5rem 0;
  }

  @media (max-width: 53.125em) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 2rem;
  }
`;
