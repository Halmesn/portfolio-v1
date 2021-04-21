import {
  StyledFooter,
  StyledGridButton,
  StyledChatButton,
} from 'components/layout/FooterStyle';

import ChatBot from 'components/ChatBot';
import { ChatButtonIcon } from 'components/ui/Icons';

export default function Footer({
  theme,
  setGridState,
  gridState,
  setChatBotState,
  chatBotState,
}) {
  const onGridButtonClick = () => {
    setGridState('open');
  };

  const onChatBotButtonClick = () => {
    setChatBotState('open');
  };

  return (
    <StyledFooter gridState={gridState}>
      <StyledGridButton onClick={onGridButtonClick}>+ explore</StyledGridButton>
      <StyledChatButton
        onClick={onChatBotButtonClick}
        chatBotState={chatBotState}
      >
        <ChatButtonIcon theme={theme} />
      </StyledChatButton>
      <ChatBot chatBotState={chatBotState} setChatBotState={setChatBotState} />
    </StyledFooter>
  );
}
