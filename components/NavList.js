export default function LinkContainer({
  setIsHover,
  children,
  alignLeft,
  center,
}) {
  return (
    <li
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={
        alignLeft
          ? { marginLeft: 'auto' }
          : center
          ? { marginLeft: 'auto', transform: 'translateX(-2vw)' }
          : null
      }
    >
      {children}
    </li>
  );
}
