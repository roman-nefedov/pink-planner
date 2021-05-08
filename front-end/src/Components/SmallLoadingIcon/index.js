import React from "react";
import { ImSpinner2 } from "react-icons/im";

import { SectionBox, StyledIcon } from "./index.styled";

export const SmallLoadingIcon = () => {
  return (
    <SectionBox>
      <StyledIcon>
        <ImSpinner2 size="25" />
      </StyledIcon>
    </SectionBox>
  );
};
