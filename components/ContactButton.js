import { StyledContactButton } from 'styles/ContactButtonStyle';

export default function ContactButton({ children }) {
  return (
    <StyledContactButton>
      <span>{children}</span>
    </StyledContactButton>
  );
}
