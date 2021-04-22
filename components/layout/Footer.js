import * as Styled from 'components/layout/FooterStyle';

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
    <Styled.Footer gridState={gridState}>
      <Styled.GridButton onClick={onGridButtonClick}>
        + explore
      </Styled.GridButton>
      <Styled.ChatButton
        onClick={onChatBotButtonClick}
        chatBotState={chatBotState}
      >
        <ChatButtonIcon theme={theme} />
      </Styled.ChatButton>
      <ChatBot chatBotState={chatBotState} setChatBotState={setChatBotState} />
    </Styled.Footer>
  );
}
