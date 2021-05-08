import React from "react";
import { SectionBox, StyledIcon } from "./index.styled";
import { ImSpinner2 } from "react-icons/im";

export const LoadingIcon = () => {
  return (
    <SectionBox>
      <StyledIcon>
        <ImSpinner2 size="40" />
      </StyledIcon>
    </SectionBox>
  );
};
