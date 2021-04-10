import { StyledHeader, StyledDescription } from 'styles/HeaderStyle';
import Navbar from './Navbar';
import { COLORS } from 'styles/variables';

import { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

export default function Header() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          backgroundColor: COLORS.background,
          birdSize: 0.6,
          separation: 20,
          speedLimit: 6,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef}>
      <StyledHeader>
        <Navbar></Navbar>
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
    </div>
  );
}
