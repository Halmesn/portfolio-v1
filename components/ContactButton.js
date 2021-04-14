import { StyledContactButton } from 'styles/ContactButtonStyle';

export default function ContactButton({ children, setChatBotState }) {
  const onContactButtonClick = () => {
    setChatBotState('open');
  };

  return (
    <StyledContactButton onClick={onContactButtonClick}>
      <span>{children}</span>
    </StyledContactButton>
  );
}
