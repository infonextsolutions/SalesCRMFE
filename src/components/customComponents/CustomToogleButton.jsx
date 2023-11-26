import React from "react";
import { ToggleButton } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';

export default function CustomToogleButton({ value, component, handleValueChange }) {
  return (
    <>
      <ToggleButtonGroup value={value && component.name}>
        <ToggleButton value={component.name}
          onClick={() => handleValueChange(!value)}>
          {component.label}
        </ToggleButton>
      </ToggleButtonGroup >
    </>
  );
};
