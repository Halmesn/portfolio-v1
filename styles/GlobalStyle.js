import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.primary};
  font-family: 'Biotif';
  transition: all 1s linear;
}

img {
  width: 100%;
  display: block;
  object-fit: cover;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Bogart', Helvetica, Arial, sans-serif;
  font-weight: 500;
}

a,
button,
h6,
input,
li,
p {
  font-family: 'Biotif', Helvetica, Arial, sans-serif;
}`;
