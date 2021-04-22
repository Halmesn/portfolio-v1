import * as Styled from 'components/ui/ContactButtonStyle';

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
