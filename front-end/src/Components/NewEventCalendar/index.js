import React from "react";
import Calendar from "react-calendar";

import { Wrapper } from "./index.styled";

export const NewEventCalendar = ({ onChange, value, onClickDay }) => {
  return (
    <Wrapper>
      <Calendar
        onChange={onChange}
        defaultView="month"
        value={value}
        prev2Label={null}
        next2Label={null}
        onClickDay={onClickDay}
      />
    </Wrapper>
  );
};
