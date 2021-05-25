import * as styled from 'components/layout/footer/FooterStyle';

import ChatBot from 'components/layout/footer/ChatBot';

export default function Footer({
  theme,
  setGridState,
  gridState,
  setChatBotState,
  chatBotState,
}) {
  return (
    <styled.Footer gridState={gridState}>
      <styled.GridButton onClick={() => setGridState('open')}>
        + explore
      </styled.GridButton>
      <styled.ChatButton
        onClick={() => setChatBotState('open')}
        chatBotState={chatBotState}
      >
        <styled.ChatBotIcon theme={theme} />
      </styled.ChatButton>
      <ChatBot chatBotState={chatBotState} setChatBotState={setChatBotState} />
    </styled.Footer>
  );
}
