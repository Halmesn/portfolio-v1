import { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

export default function Birds({ children, theme }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          birdSize: 0.6,
          separation: 20,
          speedLimit: 6,
          backgroundColor: '#fefaf6',
          color1: 0xff0000,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  if (vantaEffect && theme === 'dark') {
    vantaEffect.setOptions({
      backgroundColor: '#0a192f',
      color1: 0x4f3737,
    });
    vantaEffect.restart();
  }
  if (vantaEffect && theme === 'light') {
    vantaEffect.setOptions({
      backgroundColor: '#fefaf6',
      color1: 0xff0000,
    });
    vantaEffect.restart();
  }

  return <div ref={myRef}>{children}</div>;
}
