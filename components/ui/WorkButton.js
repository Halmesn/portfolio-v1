import * as Styled from 'components/ui/WorkButtonStyle';

export default function WorkButton({ children }) {
  return (
    <Styled.WorkButton className="sm-left-pd">
      <span>{children}</span>
      <Styled.DropdownMenu id="work-dropdown">
        <li>
          <Styled.DropDownLink href="/work/project1">
            Project1
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
