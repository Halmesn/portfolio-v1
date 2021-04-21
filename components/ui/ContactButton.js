import { StyledContactButton } from 'components/ui/ContactButtonStyle';

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
