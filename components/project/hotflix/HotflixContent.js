import * as styled from './styles';

import Image from 'next/image';

export default function HotflixContent() {
  return (
    <styled.Hotflix>
      <styled.TextContainer>
        <styled.Title>Hotflix</styled.Title>
        <styled.Description>
          Hotflix is a production-ready, open-source Netflix clone built with
          React, Next.js, styled-component, and MongoDB. It reproduces the
          experience of browsing real Netflix by using reusable React hooks and
          components along with complex CSS and multiple API calls.{' '}
          <span>
            This project got 3.6k upvotes on Reddit and will be the best Netflix
            clone you have ever seen.
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
                <a href="https://hotflix-movie.vercel.app">
                  <span className="link">Site</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>NextJs
              </td>
              <td>
                <a href="https://github.com/Halmesn/Hotflix">
                  <span className="link">Code</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>Styled-Components
              </td>
              <td>
                <a href="https://www.reddit.com/r/learnprogramming/comments/nj6ccv/">
                  <span className="link">Reddit</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>MongoDB
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>Next-Auth
              </td>
              <td></td>
            </tr>
          </tbody>
        </styled.Table>
      </styled.TextContainer>
      <styled.ImageContainer>
        <Image
          src="/images/hotflix/hotflix.gif"
          alt="hotflix demo"
          width={1266}
          height={720}
        />
      </styled.ImageContainer>
      <styled.TextContainer>
        <styled.SubTitle>Project Purpose and Goal</styled.SubTitle>
        <styled.Description>
          After 8 months of self-teaching, I decided to build a big and
          comprehensive project without help from tutorials. The first idea that
          came into my mind was a Netflix clone. Simply because I watch it every
          day! I'm very familiar with its UI and UX, as well as all the basic
          functionalities. Wouldn't it be so cool if I could make my own
          Netflix?{' '}
          <span>
            So my initial goal was to make a Netflix clone that could offer
            users the same functionalities like sign up, sign in, create, edit,
            save, delete the profile, and most importantly, they could watch
            videos on my website!
          </span>
        </styled.Description>
      </styled.TextContainer>
      <styled.FlexContainer>
        <styled.ImageContainer>
          <Image
            src="/images/hotflix/signup.gif"
            alt="hotflix demo"
            width={800}
            height={720}
          />
        </styled.ImageContainer>
        <styled.TextContainer>
          <styled.SubTitle className="web-stack">
            Web Stack and Explanation
          </styled.SubTitle>
          <styled.Description>
            React made the most sense for the web application due to its
            simplicity and flexibility. Based on React, I choose Next.js as its
            framework. It offers: 3(CSR, SSR, SSG) rendering systems, Built-in
            Routing, and Image Optimization. These features make the app super
            fast as well as super easy to develop.
            <span>
              Vercel is also an obvious choice for NextJs application deployment
              because of its speed and reliability.
            </span>
          </styled.Description>
        </styled.TextContainer>
      </styled.FlexContainer>
      <styled.TextContainer className="center">
        <styled.SubTitle>Implementing CRUD operations</styled.SubTitle>
        <styled.Description>
          There is a saying that every junior web developer has a CRUD app in
          their portfolio, well, I have one too. CRUD operations are crucial for
          web developers to fully understand how React state works.{' '}
          <span>
            But I don't think I should make an app that only does CRUD, it would
            be deadly boring, isn't it?
          </span>
        </styled.Description>
      </styled.TextContainer>
      <styled.GridContainer>
        <Image
          src="/images/hotflix/signin.gif"
          alt="hotflix demo"
          width={800}
          height={720}
        />
        <Image
          src="/images/hotflix/add_profile.gif"
          alt="hotflix demo"
          width={800}
          height={720}
        />
        <Image
          src="/images/hotflix/edit_profile.gif"
          alt="hotflix demo"
          width={800}
          height={720}
        />
        <Image
          src="/images/hotflix/delete_profile.gif"
          alt="hotflix demo"
          width={800}
          height={720}
        />
      </styled.GridContainer>
      <styled.TextContainer>
        <styled.SubTitle>Problems and Thought Process</styled.SubTitle>
        <styled.Description>
          Like most projects, I ran into a few bumps along the way, one
          particularly difficult area was building the slider along with card
          components. I spent up to 3 days trying to figure out how Netflix
          makes their slider and card animation so smooth and fast. I searched
          on Google, StackOverflow, tech blogs, and even Reddit but got nothing.{' '}
          <span>
            That was when I realized based on my current knowledge, there was no
            way I could implement the same functionality as Netflix does. So I
            decided to try another way, a totally different way. Then that
            finally worked!
          </span>
        </styled.Description>
      </styled.TextContainer>
      <styled.ImageContainer>
        <Image
          src="/images/hotflix/card.gif"
          alt="hotflix demo"
          width={1266}
          height={720}
        />
      </styled.ImageContainer>
      <styled.TextContainer>
        <styled.SubTitle>Lessons Learned</styled.SubTitle>
        <styled.Description>
          As my first large project using React and Next.Js, I learned a lot of
          lessons regarding React hooks and state management.{' '}
          <span>
            When I first began, I would write sloppy code and move on, but now I
            know how doing so can come back to bite you; I now spend a lot more
            time refactoring and improving every line I write, for the best
            readability and far fewer headaches.
          </span>
        </styled.Description>
      </styled.TextContainer>
    </styled.Hotflix>
  );
}
