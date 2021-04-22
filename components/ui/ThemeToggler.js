import * as Styled from 'components/ui/ThemeTogglerStyle';
import { useState } from 'react';

export default function ThemeToggler({ themeToggler }) {
  const [checked, setChecked] = useState(true);
  const onInputChange = () => {
    setChecked(!checked);
    themeToggler();
  };

  return (
    <Styled.ThemeToggler>
      <div className="power-switch">
        <input
          type="checkbox"
          onChange={onInputChange}
          defaultChecked={checked}
        />
        <div className="button">
          <svg className="power-off">
            <use xlinkHref="#line" className="line" />
            <use xlinkHref="#circle" className="circle" />
          </svg>
          <svg className="power-on">
            <use xlinkHref="#line" className="line" />
            <use xlinkHref="#circle" className="circle" />
          </svg>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
          id="line"
        >
          <line x1="75" y1="40" x2="75" y2="68" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
          id="circle"
        >
          <circle cx="75" cy="80" r="35" />
        </symbol>
      </svg>
    </Styled.ThemeToggler>
  );
}
