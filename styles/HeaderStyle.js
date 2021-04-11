import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: grid;
  align-content: center;
`;

export const StyledDescription = styled.div`
  transform: translateY(-1rem);

  h1 {
    font-size: 7.2rem;
    line-height: 1.1;
    color: ${({ theme }) => theme.title};

    span {
      font-family: 'Bogart';
      font-weight: 500;
      display: block;
    }
  }

  p {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.grey};
    margin-top: 2.2rem;
    line-height: 1.7;
    span {
      display: block;
    }
  }
`;
