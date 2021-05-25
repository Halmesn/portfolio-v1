import * as Styled from 'components/layout/header/ContactButtonStyle';

export default function ContactButton({ children, setChatBotState }) {
  const onContactButtonClick = () => {
    setChatBotState('open');
  };

  return (
    <Styled.ContactButton onClick={onContactButtonClick}>
      <span>{children}</span>
    </Styled.ContactButton>
  );
}
