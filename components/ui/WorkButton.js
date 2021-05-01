import * as Styled from 'components/ui/WorkButtonStyle';

export default function WorkButton({ children, setGridState }) {
  return (
    <Styled.WorkButton className="sm-left-pd">
      <span
        onClick={() => {
          setGridState('open');
        }}
      >
        {children}
      </span>
      <Styled.DropdownMenu id="work-dropdown">
        <li>
          <Styled.DropDownLink href="/work/Nextflix">
            Nextflix
          </Styled.DropDownLink>
        </li>
        <li>
          <Styled.DropDownLink href="/work/project2">
            Project2
          </Styled.DropDownLink>
        </li>
        <li>
          <Styled.DropDownLink href="/work/project3">
            Project3
          </Styled.DropDownLink>
        </li>
        <li>
          <Styled.DropDownLink href="/work/project4">
            Project4
          </Styled.DropDownLink>
        </li>
        <li>
          <Styled.DropDownLink href="/work/project5">
            Project5
          </Styled.DropDownLink>
        </li>
      </Styled.DropdownMenu>
    </Styled.WorkButton>
  );
}
