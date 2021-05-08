import styled from "styled-components"

export const Label = styled.label`
  padding-bottom: 10px;
  display: block;
  font-size: 1.2rem;
`;

export const TimeSection = styled.div`
  display: flex;
  justify-content: space-between;
  .TimeLabel {
    display: inline-block;
  }
  .AllDaySection {
    font-size: 1.2rem;
  }
  .checkBoxBox {
    margin: 0 5px;
  }
`;

export const TimeRange = styled.div`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  padding: 0 10px;
`;

export const Select = styled.select`
  appearance: none;
  padding: 1px 6px;
  margin: 0 2px;
  font-size: 1.1rem;
  border: none;
  background-color: #f2f2f2;
`;
