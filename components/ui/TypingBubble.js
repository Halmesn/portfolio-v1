import * as Styled from 'components/ui/TypingBubbleStyle';

export default function TypingBubble() {
  return (
    <Styled.TypingBubble>
      <div className="typing">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </Styled.TypingBubble>
  );
}
