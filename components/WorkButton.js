import {
  StyledWorkButton,
  StyledDropdownMenu,
  StyledDropDownLink,
} from 'styles/WorkButtonStyle';

export default function WorkButton({ children }) {
  return (
    <StyledWorkButton className="sm-left-pd">
      <span>{children}</span>
      <StyledDropdownMenu id="work-dropdown">
        <li>
          <StyledDropDownLink href="/work/project1">
            Project1
          </StyledDropDownLink>
        </li>
        <li>
          <StyledDropDownLink href="/work/project2">
            Project2
          </StyledDropDownLink>
        </li>
        <li>
          <StyledDropDownLink href="/work/project3">
            Project3
          </StyledDropDownLink>
        </li>
        <li>
          <StyledDropDownLink href="/work/project4">
            Project4
          </StyledDropDownLink>
        </li>
        <li>
          <StyledDropDownLink href="/work/project5">
            Project5
          </StyledDropDownLink>
        </li>
        <li>
          <StyledDropDownLink href="/work/project6">
            Project6
          </StyledDropDownLink>
        </li>
      </StyledDropdownMenu>
    </StyledWorkButton>
  );
}
