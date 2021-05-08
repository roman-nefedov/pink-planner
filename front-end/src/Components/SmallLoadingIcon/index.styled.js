import styled, { keyframes } from "styled-components";

const turnIcon = keyframes`
    from { transform: rotate(0deg)}
    to{transform: rotate(360deg)}
`;

export const SectionBox = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledIcon = styled.div`
  color: gray;
  width: 25px;
  height: 25px;
  animation: ${turnIcon} 1.5s infinite linear;
`;
