import * as Styled from 'components/layout/FooterStyle';

import ChatBot from 'components/layout/chat/ChatBot';

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
        <Styled.ChatBotIcon theme={theme} />
      </Styled.ChatButton>
      <ChatBot chatBotState={chatBotState} setChatBotState={setChatBotState} />
    </Styled.Footer>
  );
}
