import * as styled from '../hotflix/styles';

import Image from 'next/image';

export default function GriddyContent() {
  return (
    <styled.Hotflix padding="20rem 10rem 10rem">
      <styled.TextContainer>
        <styled.Title>Griddy</styled.Title>
        <styled.Description>
          Griddy is a single page application that makes learning CSS grid easy
          and interactive. I made this project when I finished my first React
          course on Udemy.
          <span>
            I thought it would be cool to build something that could show both
            my knowledge of CSS and React. More details in the GitHub repo.
          </span>
        </styled.Description>
        <styled.Table>
          <tbody>
            <tr>
              <th>Stack</th>
              <th>Live</th>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>React
              </td>
              <td>
                <a href="https://griddy.vercel.app/">
                  <span className="link">Site</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>NextJs
              </td>
              <td>
                <a href="https://github.com/Halmesn/Griddy">
                  <span className="link">Code</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>Styled-Components
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>framer-motion
              </td>
              <td></td>
            </tr>
          </tbody>
        </styled.Table>
      </styled.TextContainer>
      <styled.ImageContainer>
        <Image
          src="/images/griddy/grid-gif.gif"
          alt="griddy demo"
          width={711}
          height={720}
        />
      </styled.ImageContainer>
      <styled.TextContainer>
        <styled.SubTitle>Lessons Learned</styled.SubTitle>
        <styled.Description>
          This was project I built to familiarise myself with the core React
          concepts I had been learning:
          <br />
          <br />
          - Passing, deconsturcting and drilling props;
          <br />
          - Modifying, passing and lifting state;
          <br />- Working with native hooks such as useEffect and useState along
          with custom hooks.
        </styled.Description>
      </styled.TextContainer>
    </styled.Hotflix>
  );
}
