import styled from "styled-components";
import { COLORS } from "../../Constants";

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f6f7f6;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ActionsSection = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 15px;
  width: 100vw;
`;

export const ButtonCreate = styled.button`
  border: none;
  background-color: ${COLORS.button2};
  color: ${COLORS.text1};
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 10px;
  width: 160px;
  height: 40px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:disabled {
    opacity: 0.3;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  background-color: ${COLORS.button1};
  color: ${COLORS.text2};
  font-size: 1.3rem;
  line-height: 1rem;
  font-weight: 300;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 50px;
`;

export const Title = styled.input`
  margin: 10px 0;
  width: 75vw;
  border: none;
  border-bottom: 2px solid black;
  padding-bottom: 5px;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 50%;
    font-weight: 400;
  }
`;

export const Description = styled.input`
  margin: 10px 0;
  width: 75vw;
  border: none;
  border-bottom: 1px solid #b3b3b3;
  padding-bottom: 5px;
  font-size: 1rem;
  background-color: transparent;

  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 60%;
  }
`;

export const Section = styled.div`
  width: 100vw;
  box-sizing: border-box;
  border-top: 1px solid #b3b3b3;
  padding: 15px 20px;
  .dateNTimeInputSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Label = styled.label`
  padding-bottom: 10px;
  display: block;
  font-size: 1.2rem;
`;

export const InputBorder = styled.div`
  border: 1px solid #b3b3b3;
  border-radius: 3px;
  display: inline-block;
  padding: 0 5px;
  align-items: center;
  display: flex;
`;

export const SectionInput = styled.input`
  padding: 5px 0;
  font-size: 1rem;
  width: 140px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 70%;
  }
`;

export const SectionInput2 = styled.input`
  padding: 5px 0;
  font-size: 1rem;
  width: 300px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 70%;
  }
`;

export const CalendarForm = styled.div`
  padding: 0 6vw;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  .ButtonBox {
    margin: 10px 0;
  }
`;

export const ConfirmationBox = styled.div`
  margin: 20px;
  border: 1px solid #00cc63;
  border-radius: 4px;
  background-color: #e6fff2;
  padding: 5px 20px;
`;