import { Button as MuiButton } from "@mui/material";

export default function Button({ component, handleOnClick, children }) {
  return (
    <MuiButton
      key={component.name}
      className={component.className}
      onClick={() => {
        handleOnClick(true);
      }}
      variant="contained"
    >
      {component.label}
      {children}
    </MuiButton>
  );
}
