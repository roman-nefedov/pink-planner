import styled from "styled-components";

export const NewEventIcon = styled.button`
  font-size: 3rem;
  font-weight: 200;
  line-height: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  color: white;
  background-color: rgb(222, 87, 102);
  position: fixed;
  bottom: 10px;
  right: 10px;
  &:focus {
    outline: none;
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
